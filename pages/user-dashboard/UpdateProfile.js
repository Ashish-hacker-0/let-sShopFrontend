import axios from "axios";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { useCookies } from 'react-cookie';
import UserSection from "../../components/User/User-section";
var querystring = require('querystring');

const UpdateProfile = ({isloggedIn, setIsloggedIn}) => {
    const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
    const Router = useRouter();
    const [load,setLoad] = useState(true);
    const [name, setName] = useState('');
    const [password,setPassword] = useState('');
    const [confirm,setConfirm] = useState('');
    const [msg,setMsg] = useState('');
    useEffect(async()=>{
      if(!isloggedIn){
        await Router.push('/');
      }
      setLoad(false);
    },[isloggedIn]);
    const update = (e) => {
        console.log('Update');
        const accessToken = cookies['access_token'];
        e.preventDefault();
        if(password===confirm){
            axios.post('https://lets-shop-ashish.herokuapp.com/updateProfile',
                querystring.stringify({
                    name:name,
                    password:password
                }),
                {
                    headers:{"authorization": `Bearer ${accessToken}`}
                }
                
            )
            .then((res)=>{
                console.log(res);
                if(res.status===200){
                    setMsg('Profile Updated Successfully!');
                }else{
                    setMsg('Something Went Wrong!');
                }
            })
            .catch((err)=>{
                console.log(err);
                setMsg('Something went Wrong');
            })
        }else{
            setMsg('Password and Confirm Password mismatch!')
        }
    }
    return(
      <Fragment>
      {load&&<Loader/>}
       {!load && <UserSection setIsloggedIn={setIsloggedIn}>
       {msg!=''&&<p style={{fontSize:'14px'}}>* {msg}</p>}
            <div className="update-form">
                <label>
                    Full Name
                </label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                <label>
                    Password
                </label>
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <label>
                    Confirm Password
                </label>
                <input type="password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} />
                <button onClick={update} >SUBMIT</button>

            </div>
        </UserSection>}
        </Fragment>
    )
}
export default UpdateProfile;