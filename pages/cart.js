import axios from "axios";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import CartProducts from "../components/Cart/Cart-products"
import Loader from "../components/Loader";

const Cart = ({isloggedIn}) => {
    
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const [cart, setCart] = useState([]);
  const Router = useRouter();
  const [price,setPrice] = useState(0);
  const [load,setLoad] = useState(true);
  useEffect(async()=>{
    
    const accessToken = cookies['access_token'];
    console.log(accessToken);
    if(isloggedIn){
        const user = await axios.get('https://lets-shop-ashish.herokuapp.com/userDetails',{
            headers:{"authorization": `Bearer ${accessToken}`}
        }).catch( async (err)=>{
          await Router.push('/');
        console.log(err);
        return;
      });
      console.log(user);
      if(user){
        console.log(user.data.cart);
        await setCart(user.data.cart);
      }else{
         Router.push('/');
      }
    }
    setLoad(false);
  },[load]);
  useEffect(async ()=> {
    const accessToken = cookies['access_token'];
    console.log(accessToken);
    if(isloggedIn){
        const user = await axios.get('https://lets-shop-ashish.herokuapp.com/userDetails',{
            headers:{"authorization": `Bearer ${accessToken}`}
        }).catch((err)=>{
        console.log(err);
        return;
      });
      console.log(user);
      if(user){
        console.log(user.data.cart);
        var totalp = 0;
        await user.data.cart.map((c)=>{
          if(c!=null)
          totalp+=parseInt(c.total);
        });
        setPrice(totalp);
      }
    }
  },[load]);
  const checkoutProceed = () => {
    setLoad(true);
    console.log('checkout');
    if(price!=0){
      Router.push('/checkout');
    }else{
      console.log('checkout')
      setLoad(false);
    }
  }
  return(
    <Fragment>
    {load&&<Loader/>}
      {!load && <div className="cart">
          <div className="cart-plate">
              Cart
          </div>
          <div className="cart-details">
          <CartProducts cart={cart} setLoad={setLoad} />
          <button  className="update" >UPDATE CART</button>
        <div className="cart-total" >
          <p>CART TOTALS</p>
          <div><div>Subtotal</div><div>{'\u20B9'}{price}.00</div></div>
          <div><div>Shipping</div><div>Free Shipping</div></div>
          <div><div>Total</div><div>{'\u20B9'}{price}.00</div></div>
          <button className="checkout" onClick={checkoutProceed} >PROCEED TO CHECKOUT</button>
        </div>
      </div>
      </div>}
      </Fragment>
  )
}

export default Cart;