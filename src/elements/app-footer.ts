import { Hybrids } from "hybrids";
import { define, html } from "hybrids";

import { priceFormat } from "../utils/helpers";
import connect from "../factories/connectFactory";

import UiBadge from "../ui/ui-badge";

interface AppFooter extends HTMLElement {
  totalPrice: number;
}

const AppFooter: Hybrids<AppFooter> = {
  totalPrice: connect(state => state.orderSummary.total),
  render: ({ totalPrice }) =>
    html`
      <style>
         {
          /*:host {*/
        }
        footer {
          background: #000;
          color: #fff;
          font-weight: 700;
          display: block;
          padding: 15px;
          text-align: right;
        }

        ui-badge {
          --bg: orange;
          --fs: 20px;
          margin-left: 10px;
        }
      </style>
      <footer>
        Grand Total: <ui-badge>${priceFormat(totalPrice)}</ui-badge>
      </footer>
    `.define({ UiBadge })
};

define("app-footer", AppFooter);
export default AppFooter;
