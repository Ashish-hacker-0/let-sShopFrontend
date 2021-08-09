import { useEffect, useState } from "react";
import Category from "../components/Home/Category";
import Poster from "../components/Home/Poster";
import Products from "../components/Home/Products";
import Slider from "../components/Home/Slider";
import axios from 'axios';
export default function Home() {
  const [mens, setMens] = useState([]);
  const [women, setWomen] = useState([]);
  
  useEffect(async ()=>{
    await axios.get('https://lets-shop-ashish.herokuapp.com/category/Mens')
    .then((res)=>setMens(res.data));

    await axios.get('https://lets-shop-ashish.herokuapp.com/category/Women')
    .then((res)=>setWomen(res.data));
  },[])

    return (
    <div className="home">
      <Slider/>
      <Category/>
      <Poster p1="Back in stock!" class="poster1" p2="OUR BEST SWIM" />
      <Products products={mens} />
      <Poster p1="Back in stock!" class="poster2" p2="PRINT VIBES SHIRTS" />
      <Products products={women} />
      <Poster p1="What to buy now?" class="poster3" p2="NEWEST LOOKBOOKS" />
    </div>
  )
}
