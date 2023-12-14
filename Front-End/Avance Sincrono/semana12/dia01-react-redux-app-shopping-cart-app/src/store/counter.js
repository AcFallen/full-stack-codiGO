import { createSlice } from "@reduxjs/toolkit"

// Reducers: son funciones que nos ayudan a transformar los estados que creamos.

export const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers:{
        increment: (state) => {
            return state + 1
        }, 
        decrement: (state) => state - 1,
        incrementByAmount:(state, action) => state + action.payload 
    }
})

export default counterSlice.reducer

export const {increment, decrement ,incrementByAmount} = counterSlice.actions // Exportamos las acciones
