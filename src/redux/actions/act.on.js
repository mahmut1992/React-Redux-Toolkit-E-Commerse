import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getCategories = createAsyncThunk("category", async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );

  return response.data;
});

const getProducts = createAsyncThunk("getProducts", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
});
const getDetailProducts = createAsyncThunk("getDetailProducts", async (id) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return res.data;
});
const getCategoryProducts = createAsyncThunk(
  "getCategoryProducts",
  async (category) => {
    const res = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    return res.data;
  }
);

export { getCategories, getProducts, getDetailProducts, getCategoryProducts };
