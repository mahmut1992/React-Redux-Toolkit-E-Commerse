import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice"; // Arama için ekledik

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
    carts: cartReducer,
    search: searchReducer, // Redux store'a ekledik
  },
});
