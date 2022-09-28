import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemsToCart(state, action) {
      state.totalAmount = state.totalAmount + Number(action.payload.amount);

      let newItem = true;
      console.log(state.items);
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity = Number(item.quantity) + 1;
          newItem = false;
          return item;
        }
        return item;
      });
      if (newItem) {
        state.items = [action.payload, ...state.items];
      }
    },

    removeItemsFromCart(state, action) {
      state.totalAmount = state.totalAmount - Number(action.payload.amount);

      let newItem = true;
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          if (item.quantity > 1) {
            item.quantity = Number(item.quantity) - 1;
            newItem = false;
            return item;
          }
        }
        return item;
      });

      // hell
      if (newItem) {
        let num = 0;
        state.items = state.items.filter((item) => {
          if (num === 0 && item.id === action.payload.id) {
            ++num;
            return !(item.id === action.payload.id);
          } else if (!(num === 0) && item.id === action.payload.id) {
            return item.id === action.payload.id;
          } else {
            return !(item.id === action.payload.id);
          }
        });
      }
    },

    removeWholeItems(state, action) {
      state.totalAmount = state.totalAmount - Number(action.payload.amount);

      let num = 0;
      state.items = state.items.filter((item) => {
        if (num === 0 && item.id === action.payload.id) {
          ++num;
          return !(item.id === action.payload.id);
        } else if (!(num === 0) && item.id === action.payload.id) {
          return item.id === action.payload.id;
        } else {
          return !(item.id === action.payload.id);
        }
      });
    },
  },
});

const store = configureStore({
  reducer: cart.reducer,
});

export const CartAction = cart.actions;

export default store;
