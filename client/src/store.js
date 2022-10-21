import {configureStore} from '@reduxjs/toolkit';
import themeSlice from './features/themeSlice';
import productSlice from './features/productSlice';
import userAuth from './features/userAuth';
import cartSlice from './features/cartSlice';
import orderSlice from './features/OrderSLice';
import DetailsUpdate from './features/DetailsUpdate';
import myOrderSlice from './features/myOrderSlice';

import storage from 'redux-persist/lib/storage';
import {persistReducer,persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

import  adminProductSlice from './features/admin/adminProductSlice';
import productDetailSlice from './features/productDetailSlice';
import adminOrderSlice from './features/admin/adminOrderSlice';
import adminUserSlice from './features/admin/adminUserSlice';

import ReviewSlice from './features/productReviewSlice';

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
        detailsUpdateStatus:DetailsUpdate,
        myOrders:myOrderSlice,
        productDetails:productDetailSlice,
        productReview:ReviewSlice,

        adminProducts:adminProductSlice,
        adminOrders:adminOrderSlice,
        adminUsers:adminUserSlice
    },
    middleware:[thunk]
})

export const persistor=persistStore(store);