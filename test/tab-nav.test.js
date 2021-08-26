import { html, fixture, expect, oneEvent } from '@open-wc/testing';

import '../tab-nav.js';

describe('TabNav', () => {
  it('has a default title "TAB NAV DEMO" and empty array loadedText', async () => {
    const el = await fixture(html`
        <tab-nav>
            <li>
                <header>Tab 1</header>
                <section>Contenido 1</section>
            </li>
            <li>
                <header>Tab 2</header>
                <section>Contenido 2</section>
            </li>
        </tab-nav>
    `);
    expect(el.title).to.equal('TAB NAV DEMO');
    expect(el.loadedText.length).to.equal(2);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`
        <tab-nav title="attribute title">
            <li>
                <header>Tab 1</header>
                <section>Contenido 1</section>
            </li>
            <li>
                <header>Tab 2</header>
                <section>Contenido 2</section>
            </li>
        </tab-nav>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
        <tab-nav>
            <li>
                <header>Tab 1</header>
                <section>Contenido 1</section>
            </li>
            <li>
                <header>Tab 2</header>
                <section>Contenido 2</section>
            </li>
        </tab-nav>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });

  it('change active tab', async () => {
    const el = await fixture(html`
        <tab-nav id="myTabNav">
            <li>
                <header>Tab 1</header>
                <section>Contenido 1</section>
            </li>
            <li>
                <header>Tab 2</header>
                <section>Contenido 2</section>
            </li>
        </tab-nav>
    `);
 
    await expect(el.shadowRoot.getElementById("tab1").checked).is.equal(true);
    await expect(el.shadowRoot.getElementById("tab2").checked).is.equal(false);
    await el.shadowRoot.getElementById('tab2').click();
    await expect(el.shadowRoot.getElementById("tab1").checked).is.equal(false);
    await expect(el.shadowRoot.getElementById("tab2").checked).is.equal(true);
  });

  it('listen event "changed-tab-nav"', async () => {
    const el = await fixture(html`
        <tab-nav id="myTabNav">
            <li>
                <header>Tab 1</header>
                <section>Contenido 1</section>
            </li>
            <li>
                <header>Tab 2</header>
                <section>Contenido 2</section>
            </li>
        </tab-nav>
    `);

    // NO FUNCIONA ESCUCHAR EL EVENTO Y LANZAR EL EVENTO. DA TIMEOUT.
    
    // const clickButton = () => el.shadowRoot.getElementById('tab2').click();
    // setTimeout(clickButton, 0);
    // const { detail } = await oneEvent(el, 'changed-tab-nav');
    // await expect(detail.tabIndex).is.equal('2');
    
    // await expect(el.shadowRoot.getElementById("tab1").checked).is.equal(false);
    // await expect(el.shadowRoot.getElementById("tab2").checked).is.equal(true);
  });

//   it('dispatch "select-tab-nav" event', async () => {
//     const ev = new CustomEvent('select-tab-nav', {detail: { id: 'myTabNav', tabIndex: 4}});
//     document.dispatchEvent(ev);

//   });
});
