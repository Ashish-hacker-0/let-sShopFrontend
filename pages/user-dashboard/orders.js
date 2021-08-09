import axios from "axios";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Loader from "../../components/Loader";
import UserSection from "../../components/User/User-section";
import Order from "../../components/User/userOrder";

const UserOrder = ({isloggedIn, setIsloggedIn}) => {
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

    const Router = useRouter();
    const [load,setLoad] = useState(true);
    const [order,setOrder] = useState([]);
    useEffect(async()=>{
      if(!isloggedIn){
        await Router.push('/');
      }else{
      const accessToken = cookies['access_token'];
      console.log(accessToken);
      if(isloggedIn){
         const user = await axios.get('http://localhost:8001/userDetails',{
             headers:{"authorization": `Bearer ${accessToken}`}
         })
         .catch((err)=>{
           console.log(err);
         });
         console.log(user.data);
        setOrder(user.data.orders);
      }
    }
      setLoad(false);
    },[isloggedIn])
    return(
      <Fragment>
      {load&&<Loader/>}
       {!load && <UserSection setIsloggedIn={setIsloggedIn}>
            <div>
            {order.length===0&&<p className="no-order" >No Orders Yet!</p>}
              {order.map((o)=>{
                return <Order o={o} />;
              })}
            </div>
        </UserSection>}
        </Fragment>
    )
}
export default UserOrder;