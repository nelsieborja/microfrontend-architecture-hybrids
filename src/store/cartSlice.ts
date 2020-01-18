import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICartState {
  count: number;
  offset?: number;
}

const initialState: ICartState = {
  count: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCount(state, action: PayloadAction<Partial<ICartState>>) {
      const { count, offset } = action.payload;
      if (count) {
        state.count = count;
      }
      if (offset) {
        state.count += offset;
      }
    }
  }
});

export const { updateCount } = cartSlice.actions;

export default cartSlice.reducer;
