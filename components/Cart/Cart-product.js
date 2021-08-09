import {ImCancelCircle} from 'react-icons/im';
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useCookies } from 'react-cookie';
var querystring = require('querystring');
const CartProduct = ({ c, setLoad }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

    console.log(c);
    const myLoader=({src})=>{
        return `https://lets-shop-ashish.herokuapp.com/static/images/${c.image}`;
    }
    const [qnty, setQnty] = useState(0);
    const [price, setPrice] = useState(24);
    useEffect(()=>{
        
    },[]);
    const deleteItem = async () => {

        const accessToken = cookies['access_token'];

        setLoad(true);
        await axios.post('https://lets-shop-ashish.herokuapp.com/deletecartitem',querystring.stringify({
         
           pid:c.id
       }),{
         headers: {
           'Content-Type': 'application/x-www-form-urlencoded',
           "authorization": `Bearer ${accessToken}`
         }
       });
       setLoad(false);
    }
    //razorpay 9TsocJ1RgfIiPBzJUpNAGB83
    const decreaseQty = async () => {
        let qtty = qnty+1;
        console.log(qtty);
        await setQnty(qtty);
        const accessToken = cookies['access_token'];
        setLoad(true);
       
        if(qnty!=1){
            await axios.post('https://lets-shop-ashish.herokuapp.com/upatecartItem',querystring.stringify({
           pid:c.id,
           qty:--c.qty,
        }),{
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            "authorization": `Bearer ${accessToken}`
            }
        });
        }
        
        setLoad(false);
        
    }
    const increaseQty = async () => {
        let qtty = qnty+1;
        console.log(qtty);
        await setQnty(qtty);
        const accessToken = cookies['access_token'];
        setLoad(true);
       
        console.log(qnty);
        if(qnty!=5){
            await axios.post('https://lets-shop-ashish.herokuapp.com/upatecartItem',querystring.stringify({
           pid:c.id,
           qty:++c.qty,
        }),{
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            "authorization": `Bearer ${accessToken}`
            }
        });
        }
        
        setLoad(false);
        
    }
    return(
        <div className="cart-product">
            <div onClick={deleteItem} > <ImCancelCircle/> </div>
            <div>  <Image loader={myLoader} src={`https://lets-shop-ashish.herokuapp.com/static/images/${c.image}`} height="150px" width="190px"/> </div>
            <div> {c.name} </div>
            <div> {'\u20B9'}{(c.total/c.qty)}.00 </div>
            <div> <span>{<span><AiOutlineMinusCircle onClick={decreaseQty}/></span>} <p> {c.qty} </p> {<span><AiOutlinePlusCircle onClick={increaseQty} /></span>} </span> </div>
            <div> {'\u20B9'}{c.total}.00 </div>
        </div>
    )
}

export default CartProduct;