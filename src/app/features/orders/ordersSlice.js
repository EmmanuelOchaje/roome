import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: { orders: [] },
  reducers: {
    placeOrder(state, action) {
      state.orders.push({
        id: Date.now(),
        items: action.payload.items,
        total: action.payload.total,
        date: new Date().toISOString(),
      });
    },
  },
});

export const { placeOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
