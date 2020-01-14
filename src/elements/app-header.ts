import { define, html, parent } from "hybrids";

import THybridsElement from "../types/hybrids.types";

import AppStore from "./app-store";
import UiBadge from "../ui/ui-badge";

const AppHeader: THybridsElement = {
  store: parent(AppStore),
  render: host =>
    html`
      <style>
        :host {
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
      <slot></slot> <ui-badge>${host.store.data.cartCount}</ui-badge>
    `.define({ UiBadge })
};

type TAppHeader = typeof AppHeader;
define("app-header", AppHeader);
export default AppHeader;
