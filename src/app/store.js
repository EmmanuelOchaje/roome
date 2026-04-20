import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../app/features/cart/cartSlice";
import ordersReducer from "../app/features/orders/ordersSlice";
import authReducer from "../app/features/auth/authSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: ordersReducer,
    auth: authReducer,
  },
});
