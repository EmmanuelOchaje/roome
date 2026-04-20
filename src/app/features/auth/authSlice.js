import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("roome_user")) || null,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
      localStorage.setItem("roome_user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("roome_user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
