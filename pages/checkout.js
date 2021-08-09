import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import Loader from '../components/Loader';
var querystring = require('querystring');
const Checkout = ({isloggedIn}) => {
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
    const [name,setName] = useState('');
    const [country,setCountry] = useState('India');
    const [street,setStreet] = useState('');
    const [town,setTown] = useState('');
    const [state,setState] = useState('');
    const [number,setNumber] = useState('');
    const [post,setPost] = useState('');
    const Router = useRouter();
    const [load,setLoad] = useState(true);
    const [price,setPrice] = useState(0);
    const [submit,setSubmit] = useState(false);
    useEffect( async ()=>{
      
      const accessToken = cookies['access_token'];
      console.log(accessToken);
      if(isloggedIn){
          const user = await axios.get('http://localhost:8001/userDetails',{
              headers:{"authorization": `Bearer ${accessToken}`}
          }).catch((err)=>{
          console.log(err);
          Router.push('/');
        });
        console.log(user);
        
        let totalp = 0;
        await user.data.cart.map((c)=>{
          if(c!=null)
          totalp+=parseInt(c.total);
        });
        setPrice(totalp);
      }
      setLoad(false);
    });

    const SubmitOrder = async ()=>{
      setLoad(true);
      const accessToken = cookies['access_token'];
        await axios.post('http://localhost:8001/submitOrder',querystring.stringify({
            name:name,
            country:country,
            street:street,
            town:town,
            state:state,
            number:number,
            post:post,
          }),{
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              "authorization": `Bearer ${accessToken}`
            }
          });
          setSubmit(true);
          setLoad(false);
          
    }

    return(
      <Fragment>
      {load&&<Loader/>}
        {!load&&<div className="checkout">
            <div className="checkout-plate">
            CheckOut
            </div> 
            {submit&&<div className="order-submit" ><p>Order Submitted Succesfully</p><button><Link href="/" >Go To Home</Link></button></div>}

            <div className="checkout-detail">
              <p>BILLING DETAILS</p>
              <div className="form">
                <label>Full Name</label>
                <input required value={name} onChange={(e)=>setName(e.target.value)} />
                <label>Country (we currently ship only in India)</label>
                <input required value="India" disabled />
                 <label>Street address</label>
                 <input required value={street} onChange={(e)=>setStreet(e.target.value)}/>
                 <label>Town / City</label>
                 <input required value={town} onChange={(e)=>setTown(e.target.value)}/>
                 <label>State</label>
                 <RegionDropdown
                    country={country}
                    className="input"
                    value={state}
                    onChange={(val) => setState(val)} />
                  <label>Postal Code</label>
                  <input required value={post} type='number' minLength='6' maxLength="6" onChange={(e)=>setPost(e.target.value)}/>
                  <label>Phone</label>
                  <input required value={number} type='number'  onChange={(e)=>setNumber(e.target.value)}/>  
              </div>
              <div className="order-place">
                <p>YOUR ORDER</p>
                <p>Total : {'\u20B9'} {price}.00</p>
                <button onClick={SubmitOrder} >SUBMIT ORDER</button>
              </div>
            </div>
        </div>}
        </Fragment>
    )
}

export default Checkout;