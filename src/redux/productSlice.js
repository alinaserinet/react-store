import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: {}
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct(state, {payload: product}) {
            state.items[product.id] = product;
        }
    }
});

export const {
    addProduct
} = productSlice.actions;

export default productSlice.reducer;