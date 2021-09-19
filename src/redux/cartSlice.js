import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, {payload: product}) {
            const productIndex = isProductExist(state.items, product.id);
            state.totalPrice = fixPrice(product.price + state.totalPrice);
            if(productIndex !== -1) {
                state.items[productIndex].count += 1;
                return;
            }
            state.items.push({productId: product.id, product, count: 1});
        },
        changeCount: {
            reducer: (state, {payload}) => {
                const {productId, count} = payload;
                const productIndex = isProductExist(state.items, productId);
                state.items[productIndex].count += count;
                const productPrice = state.items[productIndex].product.price;
                state.totalPrice = fixPrice(count * productPrice + state.totalPrice);
            },
            prepare: (productId, count) =>  {
                return {payload: {productId, count}};
            },
        }
    }
});

export const {
    addProduct,
    changeCount
} = cartSlice.actions;

export default cartSlice.reducer;

function isProductExist(items, id) {
    return items.findIndex(({productId}) => productId === id);
}

function fixPrice(price) {
    return parseFloat((price).toFixed(2));
}
