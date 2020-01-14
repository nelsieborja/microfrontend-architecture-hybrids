import { define, html, property } from "hybrids";

import AppAddCart from "./app-addcart";
import UiBadge from "../ui/ui-badge";
import UiCard from "../ui/ui-card";

const onChangeHandler = (host: TAppProductCard, event: any) => {
  host.totalPrice = event.target.count * host.price;
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
const priceFormat = (price: number) =>
  price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });

const AppProductCard = {
  count: 0,
  offset: 1,
  price: 0,
  totalPrice: property(0, ({ count, price }) => {
    console.log(count * price);
    return count * price; // initial render won't work 😱
  }),
  render: ({ count, offset, price, totalPrice }) =>
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
        }

        div {
          display: flex;
          align-items: center;
          font-size: 20px;
          font-weight: 700;
          margin: 4px 0 14px;
        }

        ui-badge {
          margin-left: 10px;
        }
      </style>
      <ui-card>
        <slot name="title"></slot>
        <div>
          ${priceFormat(price)} <ui-badge>${priceFormat(totalPrice)}</ui-badge>
        </div>
        <app-addcart
          count="${count}"
          offset="${offset}"
          onclick="${onChangeHandler}"
        ></app-addcart>
      </ui-card>
    `.define({ AppAddCart, UiBadge, UiCard })
};

type TAppProductCard = typeof AppProductCard;
define("app-productcard", AppProductCard);
export default AppProductCard;
