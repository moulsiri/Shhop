import {configureStore} from '@reduxjs/toolkit';
import themeSlice from './features/themeSlice';
import productSlice from './features/productSlice';
import userAuth from './features/userAuth';
import cartSlice from './features/cartSlice';
import orderSlice from './features/OrderSLice';
export const store=configureStore({
    reducer:{
        themeControl:themeSlice,
        products:productSlice,
        user:userAuth,
        cartData:cartSlice,
        orderData:orderSlice,
    },
})