import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    value: [],
    current: {},
  },
  reducers: {
    getCategories: (state, action) => {
      state.value = action.payload;
    },
    currentCategory: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { getCategories, currentCategory } = categorySlice.actions;

export default categorySlice.reducer;
