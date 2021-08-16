export const cartActionTypes = {
    addCart: 'addCart',
    removeCart: 'removeCart',
    changeCount: 'changeCount'
}

function cartReducer(state = {total: 0, items: {}}, action) {
    switch (action.type) {
        case cartActionTypes.addCart: {
            const {id, price} = action.payload;
            const count = id in state.items ? ++state.items[id].count : 1;
            const item = {product: action.payload, count};
            return {
                ...state,
                items: {
                    ...state.items,
                    [id]: item,
                },
                total: parseFloat((state.total + price).toFixed(2))
            }
        }

        case cartActionTypes.changeCount: {
            const {id, count} = action.payload;
            const item = state.items[id];
            const price = item.product.price * count;
            if(item.count + count < 0) return state;
            return {
                ...state,
                items: {
                  ...state.items,
                  [id]: {
                      ...item,
                      count: item.count + count
                  }
                },
                total: parseFloat((state.total + price).toFixed(2)),
            }
        }

        default:
            return state;
    }
}

export default cartReducer;