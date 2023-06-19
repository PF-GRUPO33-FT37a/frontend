import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Slice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    getProductsStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getProductsSuccess: (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
    },
    getProductsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getProductsStart, getProductsSuccess, getProductsFailure } =
  Slice.actions;

export const getProducts = (gender, category) => async (dispatch) => {
  dispatch(getProductsStart());
  try {
    let url = "http://localhost:3001/products";
    if (gender && category) {
      const query = { category, gender };
      const queryString = Object.entries(query)
        .filter(([_, value]) => value)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
      url += `/search?${queryString}`;
    }
    const response = await axios.get(url);
    const allProducts = response.data.documents;
    dispatch(getProductsSuccess(allProducts));
  } catch (error) {
    dispatch(getProductsFailure(error.message));
  }
};

export default Slice.reducer;