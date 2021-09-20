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
                const productCount = state.items[productIndex].count;
                if(count < 0 && productCount <= 1) return;
                state.items[productIndex].count += count;
                const productPrice = state.items[productIndex].product.price;
                state.totalPrice = fixPrice(count * productPrice + state.totalPrice);
            },
            prepare: (productId, count) =>  {
                return {payload: {productId, count}};
            },
        },
        deleteProduct(state, {payload: productId}) {
            const productIndex = isProductExist(state.items, productId);
            const {product, count} = state.items[productIndex];
            state.items.splice(productIndex, 1);
            state.totalPrice = fixPrice(state.totalPrice - product.price * count);
        }
    }
});

export const {
    addProduct,
    changeCount,
     deleteProduct
} = cartSlice.actions;

export default cartSlice.reducer;

function isProductExist(items, id) {
    return items.findIndex(({productId}) => productId === id);
}

function fixPrice(price) {
    return parseFloat((price).toFixed(2));
}