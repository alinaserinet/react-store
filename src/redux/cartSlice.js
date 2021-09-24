import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    prices: {}
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, {payload: productId}) {
            const productIndex = isProductExist(state.items, productId);
            if (productIndex !== -1) {
                state.items[productIndex].count += 1;
                return;
            }
            state.items.push({productId, count: 1});
        },
        changeCount: {
            reducer: (state, {payload}) => {
                const {productId, count} = payload;
                const productIndex = isProductExist(state.items, productId);
                const productCount = state.items[productIndex].count;
                if (count < 0 && productCount <= 1) return;
                state.items[productIndex].count += count;
            },
            prepare: (productId, count) => {
                return {payload: {productId, count}};
            },
        },
        deleteProduct(state, {payload: productId}) {
            const productIndex = isProductExist(state.items, productId);
            state.items.splice(productIndex, 1);
        },
        setCartItems(state, {payload: items}) {
            state.items = items;
        },
        setPrice: {
            reducer(state, {payload}) {
                const {productId, price} = payload;
                state.prices[productId] = price;
            },
            prepare(productId, price) {
                return {
                    payload: {productId, price}
                }
            }
        }
    }
});

export const {
    addProduct,
    changeCount,
    deleteProduct,
    setCartItems,
    setPrice
} = cartSlice.actions;

export default cartSlice.reducer;

export function isProductExist(items, id) {
    return items.findIndex(({productId}) => productId === id);
}

export function fixPrice(price) {
    return parseFloat((price).toFixed(2));
}
