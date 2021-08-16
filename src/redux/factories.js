import {cartActionTypes} from "./cartReducer";

export const addToCart = (product) => ({
    type: cartActionTypes.addCart,
    payload: product
});

export const changeCount = (id, count = 1) => ({
    type: cartActionTypes.changeCount,
    payload: {
        id,
        count
    }
});