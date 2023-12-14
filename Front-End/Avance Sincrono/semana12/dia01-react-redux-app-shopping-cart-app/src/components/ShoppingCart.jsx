import { useSelector, useDispatch} from 'react-redux'

import { removeToCart, clearAll } from '../store/cart'

const ShoppingCart = () => {

    const cart = useSelector(state => state.cart)

    const dispatch = useDispatch()

    const total = cart.reduce((acc, product) => {
        const qty = product.quantity
        const price = product.price
        const subtotal = qty * price

        return acc + subtotal
    },0)

    if (cart.length ===0) {
        return(
            <div>
                <h3>Shopping Cart</h3>

                <p>Shopping cart empty</p>
            </div>
        )
    }

  return (
    <div>
        <h3>Shopping Cart</h3>

        <div>
            <button onClick={() => dispatch(clearAll())}>
                Clean cart
            </button>
        </div>

        {/* <pre>{JSON.stringify(cart ,null,2)}</pre>  */}

        <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
            {cart && cart.map(product => {
                return(
                    <button 
                    key={product.id} 
                    style={{backgroundColor: '#FF8688'}}
                    onClick={()=> dispatch (removeToCart(product.id))}
                    >
                        {product.title} - S/ {product.price}  Qty: {product.quantity}                        
                    </button>
                )
            })}
        </div>

        <div style={{paddingTop:'1rem'}}>
            <strong>TOTAL:</strong> {total}
        </div>
    </div>
  )
}

export default ShoppingCart