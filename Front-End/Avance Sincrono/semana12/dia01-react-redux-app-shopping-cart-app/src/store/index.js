// PASO NUMERO 1: Creamos un  store

import { configureStore } from "@reduxjs/toolkit"

import counteReducer from '../store/counter'
import cartReducer from '../store/cart'


export const store = configureStore({
    reducer:{
        counter: counteReducer,
        // Exportando el estado inicial y a los reducers del slice
        cart: cartReducer
    }
})