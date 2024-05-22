import { combineReducers } from "@reduxjs/toolkit";
import { productSlice } from "./slices/productSlice";
import profileSlice from "./slices/profileSlice";

export const { setProducts} = productSlice.actions;


export const productReducer = productSlice.reducer;
export const profileReducer = profileSlice;

const rootReducer = combineReducers({
    product: productReducer,
    profile: profileReducer
})

export default rootReducer;