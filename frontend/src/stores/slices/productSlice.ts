import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from './../../interface/product';

const initialProductState: {products: IProduct[]} = {products: []}

export const productSlice = createSlice({
    name: 'product',
    initialState: initialProductState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload
        }
    }
})