import {configureStore} from '@reduxjs/toolkit';
import themeSlice from './features/themeSlice';
import productSlice from './features/productSlice';
import userAuth from './features/userAuth';
import cartSlice from './features/cartSlice';
import orderSlice from './features/OrderSLice';

import storage from 'redux-persist/lib/storage';
import {persistReducer,persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig={
    key:'root',
    storage,
}

const persistedReducer=persistReducer(persistConfig,userAuth);

export const store=configureStore({
    reducer:{
        themeControl:themeSlice,
        products:productSlice,
        user:persistedReducer,
        cartData:cartSlice,
        orderData:orderSlice,
    },
    middleware:[thunk]
})

export const persistor=persistStore(store);