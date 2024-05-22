import { combineReducers } from "@reduxjs/toolkit";
import { productSlice } from "./slices/productSlice";

export const { setProducts} = productSlice.actions;

export const productReducer = productSlice.reducer

const rootReducer = combineReducers({
    product: productReducer
})

export default rootReducer;