import axios from 'axios';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import {FaUserCircle} from 'react-icons/fa';
import Loader from '../../components/Loader';
import UserSection from "../../components/User/User-section";
var querystring = require('querystring');

const UserDash = ({isloggedIn, setIsloggedIn}) => {
    const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
    const Router = useRouter();
    const [load,setLoad] = useState(true);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    useEffect(async()=>{
     
      const accessToken = cookies['access_token'];
      console.log(accessToken);
      if(isloggedIn){
         const user = await axios.get('http://localhost:8001/userDetails',{
             headers:{"authorization": `Bearer ${accessToken}`}
         }).catch((err)=>{
           Router.push('/');
          console.log(err);
          return;
        });
         console.log(user);
         if(user.data.name){
         setFname((await user).data.name.split(' ')[0]);
         setLname(user.data.name.split(' ')[1]);
         }
         console.log(email);
         setEmail(user.data.email);
         console.log(email);
    }
      setLoad(false);
    },[isloggedIn])
    return(
      <Fragment>
      {load&&<Loader/>}
       {!load && <UserSection setIsloggedIn={setIsloggedIn} isloggedIn={isloggedIn} >
           <div>
               <p><FaUserCircle/> </p>
               <p>First Name: {fname} </p>
               <p>Last Name: {lname} </p>
               <p>Email: {email} </p>
           </div>
        </UserSection>}
        </Fragment>

    )
}

export default UserDash;