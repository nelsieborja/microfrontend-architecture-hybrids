import { Hybrids } from "hybrids";
import { define, html, parent, property } from "hybrids";

import { priceFormat } from "../utils/helpers";

import AppAddCart from "./app-addcart";
import UiBadge from "../ui/ui-badge";
import UiCard from "../ui/ui-card";

import AppStore, { getValueFromStore, pushToStore } from "./app-store";
import { dispatch } from "../store";

interface AppProductCard extends HTMLElement {
  store: AppStore;
  count: number;
  cartCount: number;
  offset: number;
  price: number;
  totalPrice: number;
}
const onChangeHandler = (host: AppProductCard, event: any) => {
  const { count } = event.target;
  const offset = count - host.count;
  const subtotal = count * host.price - host.totalPrice;

  dispatch.cart.updateCount({ offset });
  dispatch.orderSummary.updateTotal({ subtotal });
  host.count = count;
};

const AppProductCard: Hybrids<AppProductCard> = {
  store: parent(AppStore),
  count: property(0, (host, key) => {
    dispatch.cart.updateCount({ offset: host[key] });
  }),
  offset: 1,
  price: 0,
  totalPrice: {
    get: ({ count, price }) => count * price,
    connect: (host, key) => {
      dispatch.orderSummary.updateTotal({ subtotal: host[key] });
    }
  },
  cartCount: {
    get: host => host.count,
    observe: (host, value, lastValue) => {
      const cartCount = getValueFromStore(host.store, "cartCount");
      const offset = value - (lastValue || 0);

      pushToStore(host.store, { cartCount: cartCount + offset });
    }
  },
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
          oninput="${onChangeHandler}"
        ></app-addcart>
      </ui-card>
    `.define({ AppAddCart, UiBadge, UiCard })
};

define("app-productcard", AppProductCard);
export default AppProductCard;
