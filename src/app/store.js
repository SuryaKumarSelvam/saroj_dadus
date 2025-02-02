import {configureStore} from "@reduxjs/toolkit";
import userReducer from '../features/userSlice'
import categoriesReducer from '../features/categoriesSlice'
import cartReducer from '../features/cartSlice'

export const store = configureStore({
    reducer:{
        userData:userReducer,
        categories: categoriesReducer,
        cart:cartReducer
    }
})