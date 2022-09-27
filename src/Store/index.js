import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount : 0
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addItemsToCart(state, action) {
      state.items = [action.payload, ...state.items];
    },

    removeItemsFromCart(state, action) {
      state.items = state.items.filter((item) => {
        return !(item.id === action.payload);
      });
    },
  },
});

const store = configureStore({
  reducer: cart.reducer,
});

export const CartAction = cart.actions;

export default store;
