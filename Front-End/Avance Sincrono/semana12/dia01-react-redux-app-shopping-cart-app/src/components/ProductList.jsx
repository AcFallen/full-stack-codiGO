import { useDispatch } from "react-redux"

import { addToCart } from "../store/cart"

const ProductList = ({ products }) => {

    const dispatch = useDispatch()

  return (
    <section style={{display:'flex',flexDirection:'column'}}>
        <h3>ProductList</h3>

        <div style={{display:"grid", gridTemplateColumns:'1fr', gap:'1rem'}}>
            {products && products.map(product => {
                return(
                    <button 
                    key={product.id} 
                    style={{backgroundColor:'#F4F27E'}}
                    onClick={()=> dispatch(addToCart(product))}>
                        {product.title}
                    </button>
                )
            })}
        </div>
    </section>
    
  )
}

export default ProductList