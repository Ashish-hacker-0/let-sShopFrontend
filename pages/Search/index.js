import axios from 'axios';
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import SearchPlate from '../../components/Search/SearchPlate';

const Search = () => {
    const Router = useRouter();
    const {query} = Router;
    console.log(query);
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);
    // const [query, setQuery] = useState('');
    useEffect(async ()=>{
        console.log(query);
        await axios.get(`http://localhost:8001/search?query=${query.query}`)
        .then(async (res)=>{
            console.log(res);
            if(res.status===200){
                await setProducts(res.data);
                console.log('Search', products);
            }else{
                Router.push('/');
            }
        });
       setLoad(false);
    },[query]);
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
export default Search;