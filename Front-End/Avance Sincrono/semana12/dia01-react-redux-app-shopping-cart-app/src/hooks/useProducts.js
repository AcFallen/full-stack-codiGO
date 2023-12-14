import { useEffect, useState } from "react"

import { fetchProducts } from '../services/products'

export function useProducts(){

    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetchProducts()
        .then(setProducts)
    },[])

    return {
        products
    }
}