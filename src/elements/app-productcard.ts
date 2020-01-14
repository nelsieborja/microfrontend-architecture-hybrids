import { define, html } from "hybrids";

import AppAddCart from "./app-addcart";
import UiCard from "../ui/ui-card";

const AppProductCard = {
  count: 0,
  offset: 1,
  render: ({ count, offset }) =>
    html`
      <style>
        :host {
          display: inline-flex;
          flex-direction: column;
          width: 200px;
        }

        slot[name="title"] {
          color: #333;
          display: block;
          font-weight: 700;
          margin-bottom: 10px;
        }
      </style>
      <ui-card>
        <slot name="title"></slot>
        <app-addcart count="${count}" offset="${offset}"></app-addcart>
      </ui-card>
    `.define({ AppAddCart, UiCard })
};

define("app-productcard", AppProductCard);
export default AppProductCard;
