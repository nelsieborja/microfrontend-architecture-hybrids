import { define, html, parent } from "hybrids";

import THybridsElement from "../types/hybrids.types";

import AppStore from "./app-store";

const AppHeader: THybridsElement = {
  store: parent(AppStore),
  render: host => html`
    <style>
      :host {
        background: #000;
        color: #fff;
        display: block;
        padding: 15px;
      }
    </style>
    <slot></slot> ${host.store.data.cartCount}
  `
};

type TAppHeader = typeof AppHeader;
define("app-header", AppHeader);
export default AppHeader;
