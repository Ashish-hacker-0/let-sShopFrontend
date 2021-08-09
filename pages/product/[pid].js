import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai';
import Loader from '../../components/Loader';
import PleaseLogin from '../../components/pleaseLogin';
import Product from '../../components/Search/Product';
var querystring = require('querystring');

const ProductDetail = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
    const Router = useRouter();
    const {query} =Router;
    const [load, setLoad] = useState(true);
    const myLoader=({src})=>{
        return `http://localhost:8001/static/images/${product.image}`;
    }
    const [qnty, setQnty] = useState(1);
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);
    const [loginp, setLoginp] = useState(false);
    const [gotoCart, setGotoCart] = useState(false);
    useEffect(async ()=>{
       const pid = query.pid;
       console.log("Product UseEffect");
       await axios.get(`http://localhost:8001/product/${pid}`)
       .then(async (res)=>{
         if(res.status==200){
           await setProduct(res.data);
           console.log(product);
         }
       });
       
    },[query]);
    useEffect(async()=>{
      await axios.get(`http://localhost:8001/category/${product.cat}`)
        .then(async (res)=>{
            console.log(res);
            await setProducts(res.data);
            console.log('Search', products);
        });

       setLoad(false);

    },[product]);
    const addToCart = async () => {
      const accessToken = cookies['access_token'];
      console.log(product);
      if(accessToken){
      await axios.post('http://localhost:8001/addtocart',querystring.stringify({
         
           id:product._id,
           name:product.name,
           qty:parseInt(qnty),
           total:parseInt(qnty*product.price),
           image:product.image
      }),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          "authorization": `Bearer ${accessToken}`
        }
      });
      setGotoCart(true);
    }else{
      setLoginp(true);
    }
    }

    const GoToCart = async () => {
      setLoad(true);
      await Router.push('/cart');
      setLoad(false);
    }

    return(
      <Fragment>
      {load&&<Loader/>}
      {loginp&&<PleaseLogin setLoginp={setLoginp} msg="add to cart" />}
        {!load&&<div className="product-page">
            <div className="product-detail">
                <div>
                  <Image loader={myLoader} src={`http://localhost:8001/static/images/${product.image}`} height="500px" width="490px"/>
                </div>
                <div>
                    <p>{product.name}</p>
                    <p>{'\u20B9'} {product.price}.00</p>
                    <p>{product.desc}</p>
                    <div><span>{<span><AiOutlineMinusCircle onClick={()=>qnty!=1&&setQnty(qnty-1)}/></span>} <p> {qnty} </p> {<span><AiOutlinePlusCircle onClick={()=>qnty!=5&&setQnty(qnty+1)} /></span>} </span>{!gotoCart&&<button onClick={addToCart} >ADD TO CART</button>}{gotoCart&&<button onClick={GoToCart} >GO TO CART</button>}</div>
                      <p className="size">Size: {product.size}</p>
                      <p className="cat">Categories: {product.cat}</p>
                </div>
               
            </div>
            <div className="related">
            <p className="title">Related Products</p>
            <div className="related-product">
            {products.map((p,i)=>{
                 if(i>3){
                   return;
                 }
                 return <Product price={p.price} name={p.name} image={p.image} type={p.type} id={p._id}  />
               })}
            </div>
          </div>

        </div>}
        </Fragment>
    )
}
export default ProductDetail;