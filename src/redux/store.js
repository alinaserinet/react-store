import reducer from './reducer';
import {configureStore} from "@reduxjs/toolkit";
import {syncLocalStorageCart} from "./middleWares";

export default configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat(syncLocalStorageCart),
});