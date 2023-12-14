import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [
        // {id: 1, title:'product 1'},
        // {id: 2, title:'product 2'}
    ],
    reducers: {
        addToCart: (state, action) => { 
            // console.log('Add to cart')   
            const newProduct = action.payload

            const productincartIndex = state.findIndex(item => item.id === newProduct.id)
            //entra aqui cuando el producto ya existe  en el carrito
            if (productincartIndex >= 0) {
                const newState = state.map(product => {
                    if(product.id === newProduct.id){
                        return{
                            ...product,
                            quantity: product.quantity + 1 
                        }

                    }

                    return product
                })

                return newState
            }   
            // entra aqui cuando el producto no existe en el carrito de compras
            return [
                ...state,
                {
                    ...newProduct,
                    quantity: 1
                }
            ]
        },
        removeToCart:(state, action) =>{
            // console.log('removeToCart')
            const productId = action.payload

            return state.filter(product => product.id != productId)

        },
        clearAll:(state) =>{ 
            // console.log('clearToCart')
            return []
        }
    }
})

export default cartSlice.reducer // Exportando al estado inicial y a los reducers del slice

export const {addToCart, removeToCart, clearAll} = cartSlice.actions