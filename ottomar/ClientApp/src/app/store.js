import { configureStore } from "@reduxjs/toolkit";
import products from "../pages/Products/productSlice";

export default configureStore({
  reducer: {
    products,
  },
});
