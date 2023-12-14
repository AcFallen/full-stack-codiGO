import { useEffect, useState } from "react"
import Counter from "./components/Counter"
import ProductList from "./components/ProductList"

import { useProducts } from "./hooks/useProducts"
import ShoppingCart from "./components/ShoppingCart"


export default function App() {

  // const [products, setProducts] = useState([])

  // const fetchProducts = async () => {
  //   const url = 'https://dummyjson.com/products'

  //   const response = await fetch(url)

  //   const data = await response.json()

  //   return data.products
  // }

  // useEffect(()=>{
  //   fetchProducts()
  //     .then(setProducts)
  // },[])

  const { products } = useProducts()

  return (
    <>
      <div style={{display:'flex', gap:'1rem' }}>
        {/* {JSON.stringify(products)} */}
        <ProductList products={products} />
        <ShoppingCart />
      </div>
      <Counter />
    </>

  )
}
