import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    value: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.value = action.payload;
    },

    getProductsByCategoryId: (state, action) => {
      state.value = action.payload;
    },

    getProductByProductId(state, action) {
      state.value = action.payload;
    },
  },
});

export const { getProducts } = productSlice.actions;

export default productSlice.reducer;
