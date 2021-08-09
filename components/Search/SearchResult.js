import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Product from "./Product"
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai';
const SearchResult = ({products}) => {
    const [ns,setNs] = useState(0);
    const [np,setNp] = useState(0);
    const [ci, setCi] = useState(1);
    console.log('Search Result', products);
    const [contents, setContents] = useState([]);
    const [arr, setArr] = useState([1,2,3,4,5,6,7,8,9,10,11 ,12,13,14,15,16,17, 18, 19,20]);
    useEffect(()=>{
        setNs(products.length);
        setNp(Math.ceil(ns/12));
        // let content = [];
        // for(var i=(ci-1)*12;i<(ci)*12;i++){
        //     if(i==arr.length){
        //         break;
        //     }
        //     content.push(<Product price={arr[i]} />)
        // }
        // setContents(content);
    },[ns, np, ci]);
    console.log(ns , np, ci);
    const changeCi=(key, value)=>{
        window.scrollTo({
            top:180,
            behavior:'smooth',
            
        });
        setCi(key);
    }
    return(
        <div className="search-result">
            <div className="top">
             <p>Showing {(ci-1)*12+1}-{(ci*12)<products.length?(ci*12):products.length} of {products.length} results</p>
             <p>Sort by Price : <span>Low <AiFillCaretDown/> </span> <span> High <AiFillCaretUp/> </span> </p>
            </div>
            <div className="results">
              {products.map((p)=>{
                  return <Product name={p.name} price={p.price} image={p.image} type={p.type} id={p._id} />
              })}
            </div>
            <div className="pagination">
                <ul>
                   <Pagination np={np} ci={ci} setCi={changeCi} />
                </ul>
            </div>
        </div>
    )
}
export default SearchResult;