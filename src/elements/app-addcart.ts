import { define, html, parent } from "hybrids";

import THybridsElement, { IHybridsDescriptors } from "../types/hybrids.types";

import AppStore, { getValueFromStore, pushToStore } from "./app-store";
import AppButton from "../ui/ui-button";

const onDecHandler = (host: TAppAddCart) => {
  if (host.count - host.offset < 0) return;
  host.count -= host.offset;
};

const onIncHandler = (host: TAppAddCart) => {
  host.count += host.offset;
};

const AppAddCart: THybridsElement<{
  count: number;
  offset: number;
  cartCount: IHybridsDescriptors<TAppAddCart>;
}> = {
  store: parent(AppStore),
  count: 0,
  offset: 1,
  cartCount: {
    get: host => host.count,
    observe: (host, value, lastValue) => {
      const cartCount = getValueFromStore(host.store, "cartCount") || 0;
      const offset = value - (lastValue || 0);

      pushToStore(host.store, { cartCount: cartCount + offset });
    }
  },
  render: ({ count, store }) =>
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

type TAppAddCart = typeof AppAddCart;
define("app-addcart", AppAddCart);
export default AppAddCart;
