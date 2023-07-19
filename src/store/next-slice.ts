import { createSlice } from "@reduxjs/toolkit";

import { CartItem } from "../../types";

interface NextState {
  productData: CartItem[];
  favoriteData: CartItem[];
  allProducts: CartItem[];
  userInfo: null | string;
}

const initialState: NextState = {
  productData: [],
  favoriteData: [],
  allProducts: [],
  userInfo: null,
};

export const nextSlice = createSlice({
  name: "next",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (product: CartItem) => product._id === action.payload._id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData = state.productData.concat(action.payload);
      }
    },
    addToFavorite: (state, action) => {
      const existingProduct = state.favoriteData.find(
        (product: CartItem) => product._id === action.payload._id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.favoriteData = state.favoriteData.concat(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.favoriteData.find(
        (product: CartItem) => product._id === action.payload._id
      );

      existingProduct && existingProduct.quantity++;
    },

    decreaseQuantity: (state, action) => {
      const existingProduct = state.favoriteData.find(
        (product: CartItem) => product._id === action.payload._id
      );

      existingProduct && existingProduct.quantity === 1
        ? (existingProduct.quantity = 1)
        : existingProduct!.quantity--;
    },
  },
});

export const { addToCart } = nextSlice.actions;

export default nextSlice.reducer;
