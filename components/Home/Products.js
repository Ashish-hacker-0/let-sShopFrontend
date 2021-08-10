import Product from "./Product"
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
import { useEffect, useState } from "react";
const Products = ({products}) => {
    const [index, setIndex] = useState(0);
    const [number, setNumber] = useState(products.length);
    const [innerwidth, setInnerwidth] = useState(0);
    useEffect(()=>{
       setInnerwidth(window.innerWidth);
    },[]);
    const leftClick = () =>{
        setIndex(index-1);
    }
    const rightClick = () => {
        setIndex(index+1);
    }
    const minStyles = {
        transform:`translate3d(${-index*50}%,0,0)`,
       
    }
    const maxStyles = {
        transform:`translate3d(${-index*25}%,0,0)`,
       
    }
    var style = function() {
        if (innerwidth < 800) {
          return minStyles;
        } else {
          return maxStyles;
        }
     };
    console.log(index);
    return(
        <div className="productContainer">
        <div className="slider" onClick={leftClick} >
         {index!=0 && <AiOutlineLeft/>}
        </div>
            <div className="products">
            <div style={style()}>
               {
                   products.map((p)=>{
                       return <Product image={p.image} name={p.name} price={p.price} type={p.cat} id={p._id} />
                   })
               }
            </div>
            </div>
            <div  className="slider" onClick={rightClick}>
              {number!=3 && <AiOutlineRight/>}
            </div>
        </div>
    )
}

export default Products;