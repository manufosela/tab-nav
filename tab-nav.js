import { LitElement, html } from 'lit-element';
import { tabNavStyles } from './tab-nav-styles';

/**
 * `tab-nav`
 * TabNav
 *
 * @customElement tab-nav
 * @polymer
 * @litElement
 * @demo demo/index.html
 */

class TabNav extends LitElement {
  static get is() {
    return 'tab-nav';
  }

  static get properties() {
    return {
      id: { type: String },
      title: { type: String },
      loadedText: { type: Array },
    };
  }

  static get styles() {
    return [tabNavStyles];
  }

  constructor() {
    super();
    this.loadedText = [];
    this.id = `tab-nav-${new Date().getTime()}`;
    this.title = 'TAB NAV DEMO';
    this.tabItems = []; // Array de objetos con campos: title, icon, page o content
    const tabDomItems = [...this.querySelectorAll('li')];
    tabDomItems.forEach((tabItem, index) => {
      this.tabItems.push({
        title: tabItem.querySelector('header').innerHTML || `Title ${index}`,
        icon: tabItem.querySelector('[name="icon"]') || null,
        content: {
          src: tabItem.querySelector('source') ? tabItem.querySelector('source').getAttribute('src') : '',
          type: tabItem.querySelector('source') ? tabItem.querySelector('source').getAttribute('type') : '',
          field: tabItem.querySelector('source') ? tabItem.querySelector('source').dataset.field : '',
          text: tabItem.querySelector('section') ? tabItem.querySelector('section').innerHTML : '',
        },
      });
    });
    if (this.tabItems.length === 0) {
      this.tabItems = [{title:'TAB 1', content: { text: 'Content Tab 1'}}, {title: 'TAB 2', content: { text: 'Content Tab 2'}}];
    }
    this.tabItems.forEach((tabItem, index) => {
      if (tabItem.content.text) {
        this.loadedText[index] = tabItem.content.text;
      } else {
        this.loadedText[index] = null;
        fetch(tabItem.content.src)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error(response.statusText);
          })
          .then(json => {
            this.loadedText[index] = json[tabItem.content.field];
            this.title += ' '.repeat(index + 1);   // ÑAPA. PARA FORZAR EL RE-RENDER DE ESTE COMPONENTE
          });
      }
    });
  
    this._tabChanged = this._tabChanged.bind(this);
    this._selectTab = this._selectTab.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('select-tab-nav', this._selectTab);
  }

  _selectTab(e) {
    const detail = e.detail;
    if (detail.id === this.id) {
      if (detail.tabIndex <= this.tabItems.length && detail.tabIndex > 0) {
        this.shadowRoot.querySelector(`#tab${detail.tabIndex}`).click();
      }
    }
  }

  _tabChanged(e) {
    const target = e.target;
    const title = target.dataset.title;
    const index = target.dataset.index;
    const changedTabEvent = new CustomEvent('changed-tab-nav', {detail: { id: this.id, tabIndex: index, tabTitle: title }});
    document.dispatchEvent(changedTabEvent);
  }

  firstUpdated() {
    super.firstUpdated();
    this.shadowRoot.querySelector('#tab1').click();
    const radioBtns = [...this.shadowRoot.querySelectorAll('input[type="radio"]')];
    radioBtns.forEach((radioBtn, index) => {
      radioBtn.addEventListener('click', this._tabChanged);
    });
  }

  render() {
    return html`
      <h1>${this.title}</h1>
      <div class="tabs">
        ${this.tabItems.map((tabItem, index) => {
          return html`    
            <input type="radio" id="tab${index + 1}" name="tab-control" data-index="${index + 1}" data-title="${tabItem.title}">
          `;
          })}
        <ul>
          ${this.tabItems.map((tabItem, index) => {
            return html`
            <li title="${tabItem.title}">
              <label for="tab${index + 1}">
                ${tabItem.icon ? html`<span class="icon">${tabItem.icon}</span>` : ''}
                <span role="button">${tabItem.title}</span>
              </label>
            </li>
            `;
            })}
        </ul>
        
        <div class="slider"><div class="indicator"></div></div>

        <div class="content">
        ${this.tabItems.map((tabItem, index) => {
    return html`
            <section id="${tabItem.title.replace(/\s/gm, '_')}">
              <h2>${tabItem.title}</h2>
              ${this.loadedText[index] ? html`${this.loadedText[index]}` : html`<div class="center"><div class="lds-hourglass"></div></div>`}
            </section>
            `;
  })}

        </div>
      </div>

    `;
  }
}

window.customElements.define(TabNav.is, TabNav);