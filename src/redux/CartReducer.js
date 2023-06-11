import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const CartReducer = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart(state, action) {
      let tempCart = state.cartItems.filter(
        (item) => item.e._id === action.payload.e._id
      );

      if (tempCart < 1) {
        state.cartItems.push(action.payload);
        state.cartTotalQuantity += 1;
        state.cartTotalAmount += action.payload.price;
      } else {
        state.cartStatus = false;
      }
    },

    deleteCart: (state, action) => {
      state.cartItems.splice(action.payload.index, 1);
      state.cartTotalAmount = state.cartTotalAmount - action.payload.price;
      state.cartTotalQuantity -= 1;
    },

    clearCart: (state, action) => {
      state.cartItems = [];
      state.cartTotalQuantity = action.payload;
      state.cartTotalAmount = action.payload;
    },
  },
});

export const { addToCart, deleteCart, clearCart, cartTotalAmount } =
  CartReducer.actions;
export default CartReducer.reducer;
