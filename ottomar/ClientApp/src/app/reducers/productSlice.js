import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    value: [],
    product: {},
  },
  reducers: {
    getProducts: (state, action) => {
      state.value = action.payload;
    },

    getProductsByCategoryId: (state, action) => {
      state.value = action.payload;
    },

    getProductByProductId(state, action) {
      state.product = action.payload;
    },
  },
});

export const { getProducts, getProductByProductId } = productSlice.actions;

export default productSlice.reducer;
