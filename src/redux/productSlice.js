import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import {
  getCategoryProducts,
  getDetailProducts,
  getProducts,
} from "./actions/act.on";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.productsStatus = STATUS.LOADING;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.productsStatus = STATUS.FAIL;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productsStatus = STATUS.SUCCESS;
      state.products = action.payload;
    });
    builder.addCase(getDetailProducts.pending, (state) => {
      state.productDetailStatus = STATUS.LOADING;
    });
    builder.addCase(getDetailProducts.rejected, (state) => {
      state.productDetailStatus = STATUS.FAIL;
    });
    builder.addCase(getDetailProducts.fulfilled, (state, action) => {
      state.productDetailStatus = STATUS.SUCCESS;
      state.productDetail = action.payload;
    });
    builder.addCase(getCategoryProducts.pending, (state) => {
      state.productsStatus = STATUS.LOADING;
    });
    builder.addCase(getCategoryProducts.rejected, (state) => {
      state.productsStatus = STATUS.FAIL;
    });
    builder.addCase(getCategoryProducts.fulfilled, (state, action) => {
      state.productsStatus = STATUS.SUCCESS;
      state.products = action.payload;
    });
  },
});
export default productSlice.reducer;
