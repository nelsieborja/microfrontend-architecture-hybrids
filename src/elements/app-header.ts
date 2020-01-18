import { Hybrids } from "hybrids";
import { define, html, parent } from "hybrids";

import AppStore from "./app-store";
import UiBadge from "../ui/ui-badge";

import connect from "../factories/connectFactory";

interface AppHeader extends HTMLElement {
  store: AppStore;
  count: number;
}

const AppHeader: Hybrids<AppHeader> = {
  store: parent(AppStore),
  count: connect(state => state.cart.count),
  render: host =>
    html`
      <style>
         {
          /*:host {*/
        }
        header {
          background: #000;
          color: #fff;
          display: block;
          padding: 15px;
        }

        ui-badge {
          --bg: red;
          --br: 20px;
          margin-left: 10px;
        }
      </style>
      <header>
        <slot></slot>
        <ui-badge>Hybrids ${host.store.data.cartCount}</ui-badge>
        <ui-badge>Redux Toolkit ${host.count}</ui-badge>
      </header>
    `.define({ UiBadge })
};

define("app-header", AppHeader);
export default AppHeader;
