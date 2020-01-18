import { define, dispatch, html } from "hybrids";
import { Hybrids } from "hybrids";

import AppButton from "../ui/ui-button";

interface AppAddCart extends HTMLElement {
  count: number;
  offset: number;
}

const onDecHandler = (host: AppAddCart) => {
  if (host.count - host.offset < 0) return;
  host.count -= host.offset;
  dispatch(host, "input");
};

const onIncHandler = (host: AppAddCart) => {
  host.count += host.offset;
  dispatch(host, "input");
};

const AppAddCart: Hybrids<AppAddCart> = {
  count: 0,
  offset: 1,
  render: ({ count }) =>
    html`
      <style>
        div {
          display: flex;
          align-items: center;
        }
        span {
          flex-grow: 1;
          text-align: center;
        }
      </style>
      <div>
        <app-button onclick="${onDecHandler}">-</app-button>
        <span>${count}</span>
        <app-button onclick="${onIncHandler}">+</app-button>
      </div>
    `.define({ AppButton })
};

define("app-addcart", AppAddCart);
export default AppAddCart;
