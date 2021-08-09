import axios from 'axios';
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import SearchPlate from '../../components/Search/SearchPlate';

const Products = () => {
    const [products, setProducts] = useState([{name:'Mens Shirt', image:'men.jpg', type:'Men', price:'50'}]);
    const [load, setLoad] = useState(true);
    const Router = useRouter();
    console.log(Router);
    const {query} = Router;
    console.log(query);
    useEffect(async ()=>{
        await axios.get(`https://lets-shop-ashish.herokuapp.com/category/${query.cat}`)
        .then(async (res)=>{
            console.log(res);
            await setProducts(res.data);
            console.log('Search', products);
        });
       setLoad(false);
    },[query])
    
    return(
        <div className="search">
        <div className="search-plate">
           {Router.query.cat}
        </div>
        {!load&&<SearchPlate products={products} />}
        {load&&<Loader/>}
    </div>
    )
}
export default Products;