import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IOrderSummaryState {
  deliveryCost: number;
  total: number;
  subtotal?: number;
}

const initialState: IOrderSummaryState = {
  deliveryCost: 0,
  total: 0
};

const orderSummarySlice = createSlice({
  name: "orderSummary",
  initialState,
  reducers: {
    updateTotal(state, action: PayloadAction<Partial<IOrderSummaryState>>) {
      const { total, subtotal } = action.payload;
      if (total) {
        state.total = total;
      }
      if (subtotal) {
        state.total += subtotal;
      }
    }
  }
});

export const { updateTotal } = orderSummarySlice.actions;

export default orderSummarySlice.reducer;
