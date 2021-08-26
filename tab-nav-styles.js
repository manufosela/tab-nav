import { css } from 'lit-element';
export const tabNavStyles = css`
      :host {
        display: block;
        color: #333;
        font-family: "Raleway";
        height: 100%;
        --color-primary: #428BFF;
        --color-secondary: #929daf;
        --color-tertiary: #bec5cf;
      }
      @import "https://fonts.googleapis.com/css?family=Montserrat:400,700|Raleway:300,400";
      h1 {
        text-align: center;
        color: var(--color-primary);
        font-weight: 300;
        padding: 40px 0 20px 0;
        margin: 0;
      }
      .icon {
        width: 25px;
      }
      .center {
          text-align:center;
          width:100%;
          margin: 2rem auto;
      }

      .tabs {
        left: 50%;
        -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
        position: relative;
        background: white;
        padding: 50px;
        padding-bottom: 80px;
        width: 70%;
        /* height: 250px; */
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        border-radius: 5px;
        min-width: 240px;
      }
      .tabs input[name="tab-control"] {
        display: none;
      }
      .tabs .content section h2,
      .tabs ul li label {
        font-family: "Montserrat";
        font-weight: bold;
        font-size: 18px;
        color: var(--color-primary);
      }
      .tabs ul {
        list-style-type: none;
        padding-left: 0;
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
        justify-content: space-between;
        align-items: flex-end;
        flex-wrap: wrap;
      }
      .tabs ul li {
        box-sizing: border-box;
        flex: 1;
        width: 25%;
        padding: 0 10px;
        text-align: center;
      }
      .tabs ul li label {
        transition: all 0.3s ease-in-out;
        color: var(--color-secundary);
        padding: 5px auto;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        white-space: nowrap;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      .tabs ul li label br {
        display: none;
      }
      .tabs ul li label svg {
        fill: var(--color-secundary);
        height: 1.2em;
        vertical-align: bottom;
        margin-right: 0.2em;
        transition: all 0.2s ease-in-out;
      }
      .tabs ul li label:hover, .tabs ul li label:focus, .tabs ul li label:active {
        outline: 0;
        color: #var(--color-tertiary);
      }
      .tabs ul li label:hover svg, .tabs ul li label:focus svg, .tabs ul li label:active svg {
        fill: #var(--color-tertiary);
      }
      .tabs .slider {
        position: relative;
        width: 25%;
        transition: all 0.33s cubic-bezier(0.38, 0.8, 0.32, 1.07);
      }
      .tabs .slider .indicator {
        position: relative;
        width: 50px;
        max-width: 100%;
        margin: 0 auto;
        height: 4px;
        background: var(--color-primary);
        border-radius: 1px;
      }
      .tabs .content {
        margin-top: 30px;
      }
      .tabs .content section {
        display: none;
        -webkit-animation-name: content;
                animation-name: content;
        -webkit-animation-direction: normal;
                animation-direction: normal;
        -webkit-animation-duration: 0.3s;
                animation-duration: 0.3s;
        -webkit-animation-timing-function: ease-in-out;
                animation-timing-function: ease-in-out;
        -webkit-animation-iteration-count: 1;
                animation-iteration-count: 1;
        line-height: 1.4;
      }
      .tabs .content section h2 {
        color: var(--color-primary);
        display: none;
      }
      .tabs .content section h2::after {
        content: "";
        position: relative;
        display: block;
        width: 30px;
        height: 3px;
        background: var(--color-primary);
        margin-top: 5px;
        left: 1px;
      }
      .tabs input[name="tab-control"]:nth-of-type(1):checked ~ ul > li:nth-child(1) > label {
        cursor: default;
        color: var(--color-primary);
      }
      .tabs input[name="tab-control"]:nth-of-type(1):checked ~ ul > li:nth-child(1) > label svg {
        fill: var(--color-primary);
      }
      @media (max-width: 600px) {
        .tabs input[name="tab-control"]:nth-of-type(1):checked ~ ul > li:nth-child(1) > label {
          background: rgba(0, 0, 0, 0.08);
        }
      }
      .tabs input[name="tab-control"]:nth-of-type(1):checked ~ .slider {
        -webkit-transform: translateX(0%);
                transform: translateX(0%);
      }
      .tabs input[name="tab-control"]:nth-of-type(1):checked ~ .content > section:nth-child(1) {
        display: block;
      }
      .tabs input[name="tab-control"]:nth-of-type(2):checked ~ ul > li:nth-child(2) > label {
        cursor: default;
        color: var(--color-primary);
      }
      .tabs input[name="tab-control"]:nth-of-type(2):checked ~ ul > li:nth-child(2) > label svg {
        fill: var(--color-primary);
      }
      @media (max-width: 600px) {
        .tabs input[name="tab-control"]:nth-of-type(2):checked ~ ul > li:nth-child(2) > label {
          background: rgba(0, 0, 0, 0.08);
        }
      }
      .tabs input[name="tab-control"]:nth-of-type(2):checked ~ .slider {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
      .tabs input[name="tab-control"]:nth-of-type(2):checked ~ .content > section:nth-child(2) {
        display: block;
      }
      .tabs input[name="tab-control"]:nth-of-type(3):checked ~ ul > li:nth-child(3) > label {
        cursor: default;
        color: var(--color-primary);
      }
      .tabs input[name="tab-control"]:nth-of-type(3):checked ~ ul > li:nth-child(3) > label svg {
        fill: var(--color-primary);
      }
      @media (max-width: 600px) {
        .tabs input[name="tab-control"]:nth-of-type(3):checked ~ ul > li:nth-child(3) > label {
          background: rgba(0, 0, 0, 0.08);
        }
      }
      .tabs input[name="tab-control"]:nth-of-type(3):checked ~ .slider {
        -webkit-transform: translateX(200%);
                transform: translateX(200%);
      }
      .tabs input[name="tab-control"]:nth-of-type(3):checked ~ .content > section:nth-child(3) {
        display: block;
      }
      .tabs input[name="tab-control"]:nth-of-type(4):checked ~ ul > li:nth-child(4) > label {
        cursor: default;
        color: var(--color-primary);
      }
      .tabs input[name="tab-control"]:nth-of-type(4):checked ~ ul > li:nth-child(4) > label svg {
        fill: var(--color-primary);
      }
      @media (max-width: 600px) {
        .tabs input[name="tab-control"]:nth-of-type(4):checked ~ ul > li:nth-child(4) > label {
          background: rgba(0, 0, 0, 0.08);
        }
      }
      .tabs input[name="tab-control"]:nth-of-type(4):checked ~ .slider {
        -webkit-transform: translateX(300%);
                transform: translateX(300%);
      }
      .tabs input[name="tab-control"]:nth-of-type(4):checked ~ .content > section:nth-child(4) {
        display: block;
      }
      @-webkit-keyframes content {
        from {
          opacity: 0;
          -webkit-transform: translateY(5%);
                  transform: translateY(5%);
        }
        to {
          opacity: 1;
          -webkit-transform: translateY(0%);
                  transform: translateY(0%);
        }
      }
      @keyframes content {
        from {
          opacity: 0;
          -webkit-transform: translateY(5%);
                  transform: translateY(5%);
        }
        to {
          opacity: 1;
          -webkit-transform: translateY(0%);
                  transform: translateY(0%);
        }
      }
      @media (max-width: 1000px) {
        .tabs ul li label {
          white-space: initial;
        }
        .tabs ul li label br {
          display: initial;
        }
        .tabs ul li label svg {
          height: 1.5em;
        }
      }
      @media (max-width: 600px) {
        .tabs ul li label {
          padding: 5px;
          border-radius: 5px;
        }
        .tabs ul li label span {
          display: none;
        }
        .tabs .slider {
          display: none;
        }
        .tabs .content {
          margin-top: 20px;
        }
        .tabs .content section h2 {
          display: block;
        }
      }

      .lds-hourglass {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
      }
      .lds-hourglass:after {
        content: " ";
        display: block;
        border-radius: 50%;
        width: 0;
        height: 0;
        margin: 8px;
        box-sizing: border-box;
        border: 32px solid var(--color-primary);
        border-color: var(--color-primary) transparent var(--color-primary) transparent;
        animation: lds-hourglass 1.2s infinite;
      }
      @keyframes lds-hourglass {
        0% {
          transform: rotate(0);
          animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
        50% {
          transform: rotate(900deg);
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        100% {
          transform: rotate(1800deg);
        }
      }

    `;

