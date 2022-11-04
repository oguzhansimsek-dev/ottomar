import { configureStore } from "@reduxjs/toolkit";
import products from "./reducers/productSlice";
import categories from "./reducers/categorySlice";

export default configureStore({
  reducer: {
    products,
    categories,
  },
});
