import { define, html } from "hybrids";

const UiCard = {
  render: () => html`
    <style>
      :host {
        border: 2px solid #f3f3f3;
        border-radius: 3px;
        padding: var(--p, 20px);
        margin: var(--m, 0);
      }
    </style>
    <slot></slot>
  `
};

define("ui-card", UiCard);
export default UiCard;
