import { define, html } from "hybrids";

const UiBadge = {
  render: () => html`
    <style>
      :host {
        background: var(--bg, green);
        border-radius: var(--br, 3px);
        color: #fff;
        font-size: var(--fs, 10px);
        padding: 2px 6px;
      }
    </style>
    <slot></slot>
  `
};

define("ui-badge", UiBadge);
export default UiBadge;
