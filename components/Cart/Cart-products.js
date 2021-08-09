import CartProduct from "./Cart-product"

const CartProducts = ({cart, setLoad}) => {
    return(
        <div className="cart-products">
            <div className="products-title">
              <div></div>
              <div></div>
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>SubTotal</div>
            </div>
            {cart.map((c)=>{
               if(c!=null)
                return <CartProduct c={c} setLoad={setLoad} />
            })}
        </div>
    )
}

export default CartProducts;