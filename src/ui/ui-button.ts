import { define, html } from "hybrids";

const UiButton = {
  disabled: false,
  render: ({ disabled }) => html`
    <style>
      button {
        /* Reset */
        box-sizing: border-box;
        cursor: pointer;
        outline: none;
        user-select: none;

        /* Common */
        display: inline-flex;
        transition: transform 150ms ease-out, background 150ms ease-out,
          box-shadow 150ms ease-out;

        background: #e0ecf1;
        border: 0;
        color: #333;
        padding: 12px 16px;
      }

      button:hover {
        background: #bfd5de;
        box-shadow: #bfd5de 0px 2px 6px 0px;
        transform: translate3d(0px, -2px, 0px);
      }

      button:active {
        transform: translate3d(0, 0, 0);
      }

      button:focus {
        box-shadow: #e0ecf1 0px 1px 9px 2px;
      }
      button(:focus:hover) {
        box-shadow: #ebf3f7 0px 8px 18px 0px;
      }

      button:disabled {
        cursor: not-allowed;
        filter: grayscale(1);
        opacity: 0.6;
      }
    </style>
    <button disabled="${disabled}">
      <slot></slot>
    </button>
  `
};

define("ui-button", UiButton);
export default UiButton;
