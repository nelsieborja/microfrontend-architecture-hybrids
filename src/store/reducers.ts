import { combineReducers } from "redux";
import cartReducer from "./cartSlice";
import orderSummaryReducer from "./orderSummarySlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  orderSummary: orderSummaryReducer
});

export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
