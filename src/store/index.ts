import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";
import * as cart from "./cartSlice";
import * as orderSummary from "./orderSummarySlice";

const store = configureStore({
  reducer: rootReducer
});

console.log("Initial state: ", store.getState());

export type TAppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof rootReducer>;

export default store;

export const dispatch = {
  cart: {
    updateCount: (payload: Partial<cart.ICartState>) =>
      store.dispatch(cart.updateCount(payload))
  },
  orderSummary: {
    updateTotal: (payload: Partial<orderSummary.IOrderSummaryState>) =>
      store.dispatch(orderSummary.updateTotal(payload))
  }
};
export const getState = (): TRootState => store.getState();
export const subscribe = (observer: Function) =>
  store.subscribe(observer as () => void);
