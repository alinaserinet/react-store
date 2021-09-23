export const syncLocalStorageCart = store => next => action => {
    const typePrefix = action.type.split('/')[0];
    next(action);

    if(typePrefix === 'cart') {
        const {cart} = store.getState();
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}