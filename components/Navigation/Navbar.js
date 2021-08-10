import {CgCross, CgProfile} from 'react-icons/cg';
import {BiSearchAlt2} from 'react-icons/bi';
import {FiShoppingCart} from 'react-icons/fi';
import {AiOutlineHeart} from 'react-icons/ai';
import Link from 'next/link';
import {ImCancelCircle } from 'react-icons/im';
import classes from './Navbar.module.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import {useCookies} from 'react-cookie';
import jwt_decode from "jwt-decode";
import PleaseLogin from '../pleaseLogin';
import { useRouter } from 'next/router';
var querystring = require('querystring');

const Navbar = ({search, setSearch , user, setUser, isloggedIn, setIsloggedIn}) => {
    const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
    const Router = useRouter();
    const [login, setLogin] = useState(false);
    const [lactive,setLactive] = useState(true);
    const [newusername, setNewusername] = useState('');
    const [newuserpassword, setNewuserpassword] = useState('');
    const [email, setEmail]= useState('');
    const [repeatPaasword, setRepeatPassword]=useState('');
    const [username, setUsername] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [password,setPassword] = useState('');
    const [registererror, setRegerror] = useState(false);
    const [registersucess, setRegersuc] = useState(false);
    const [loginerror, setLoginerror] = useState(false);
    const [loginsucess, setLoginsucess] = useState(false);
    const [passworderror,setPassworderror] = useState(false);
    const [msg,setmsg] = useState(false);
    const [Msg,setMsg] = useState('');
    
    const [token, setToken] = useState('');
    const [loginp, setLoginp] = useState(false);
    const loginApi= (e) => {
        e.preventDefault();
        Axios.post('https://lets-shop-ashish.herokuapp.com/login',querystring.stringify({
            username : username,
            password : password
        }), 
        {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
        }
        })
        .then((res)=>{
            console.log(res);
            if(res.status===200){
                console.log(res);
                setCookie('access_token',res.data,{path:'/'});
                localStorage.setItem('isLoggedIn',true);
                console.log(jwt_decode(res.data));
                setIsloggedIn(true);
                setUser(jwt_decode(res.data));
                setLogin(false);
                setmsg(false);
            }else{
                setmsg(true);
                setMsg(res.data);
            }
        })
        .catch((error, res)=>{
           
            setmsg(true);
            setMsg(error.data);
        })
    }
    const RegisterApi = async(e) => {
        e.preventDefault();
        if(newuserpassword===repeatPaasword){
        const formData = new FormData();
        formData.append('username',newusername);
        formData.append('email',email);
        formData.append('password',newuserpassword);
        const config = { headers: { 'Content-Type': 'application/json' } };
        Axios.post('https://lets-shop-ashish.herokuapp.com/newUser',querystring.stringify({
            username : newusername,
            password : newuserpassword,
            email : email
        }), 
        {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then((res)=>{
            setRegerror(false);
            setRegersuc(true);
            setEmail('');
            setNewusername('');
            setNewuserpassword('');
            setRepeatPassword('');
            console.log(res)
        })
        .catch((err)=>{
            setRegerror(true)
            console.log(err)
        });
        setPassworderror(false);
    }else{
        setPassworderror(true);
    }
        
        
    }
    const searchHandler = () => {
        if(searchInput!=''){
            Router.push('/Search?query='+searchInput);
        }
    }
    useEffect(()=>{
        console.log(cookies['access_token']);
        if(cookies['access_token']){
            setToken(cookies['access_token']);
            console.log('Navbar', token);
            if(token){
                setIsloggedIn(true);
                setUser(jwt_decode(token));
            }
        }
        
    },[user,isloggedIn,token])
    let form;
    if(lactive){
        form=(
            <div className="form">
            <form onSubmit={loginApi} >
            <p>{msg&&<p style={{color:'red'}}>* {Msg}</p>}</p>
            <input placeholder="UserName"  value={username} onChange={(e)=>setUsername(e.target.value)} />
            <input placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <p>Lost Your Password?</p>

            <div>
            <button type="submit" onClick={loginApi} >LOGIN</button> <button onClick={()=>setLogin(false)} >CANCEL</button>
            </div>
            </form>
            </div>

        )
    }else{
        form=(
            <div className="form">
            <form onSubmit={RegisterApi}  >
            {registererror&&<p style={{color:'red'}}>* Username or Email already exist</p>}
            {registersucess&&<p style={{color:'green'}}>* Successfully created The User Please Login</p>}
            {passworderror&&<p style={{color:'red'}}>* Password and Confirm password mismatch</p>}
                <input placeholder="UserName"  name="username" value={newusername} required onChange={(e)=>setNewusername(e.target.value)} />
                <input placeholder="Email" name="email" value={email} required onChange={(e)=>setEmail(e.target.value)} />
                <input placeholder="Password" name="password" value={newuserpassword} required onChange={(e)=>setNewuserpassword(e.target.value)} />
                <input placeholder="Repeat-Password" type="password" value={repeatPaasword} required onChange={(e)=>setRepeatPassword(e.target.value)} />
            <div>
            <button type="submit">REGISTER</button> <button onClick={()=>setLogin(false)} >CANCEL</button>
            </div>
            </form>
            </div>

        )
    }
    return(
        <div className={classes.navbar}>
        {loginp&&<PleaseLogin setLoginp={setLoginp} msg="continue to cart" />}
            {!search&&<div className={classes.top}>
                <ul>
                    <li>
                        Contact us 24/7: +91 9308787662 
                    </li>
                    <li>
                        Express delivery and free returns within 28 days
                    </li>
                    <li> 
                        Terms & Conditions
                    </li>
                </ul>
            </div>}
            {!search&&<div className={classes.middle}>
                <ul>
                    <li>
                        {!isloggedIn?<p onClick={()=>setLogin(true)} >Login</p>:<p ><Link href="/user-dashboard" >{user}</Link></p>} | <p> <CgProfile/> </p> 
                    </li>
                    <li>
                     <Link href="/">  Let's Shop </Link> 
                    </li>
                    <li>
                        <BiSearchAlt2 onClick={()=>setSearch(true)} /> {isloggedIn&&<Link href="/cart"><FiShoppingCart/></Link>} {!isloggedIn&&<FiShoppingCart onClick={()=>setLoginp(true)}  />} <AiOutlineHeart/>
                    </li>
                </ul>
            </div>}
            {!search&&<div className={classes.footer}>
                <ul>
                <li><Link href="/" >HOME</Link></li>
                    <li><Link href="/products/Mens" >MEN</Link></li>
                    <li><Link href="/products/Women" >WOMEN</Link></li>
                    <li><Link href="/products/Kids" >KIDS</Link></li>
                    <li><Link href="/products/Accessories">ACCESSORIES</Link></li>
                </ul>
            </div>}
            {!search&&<div className={classes.stick}>
                <p className={classes.title} ><Link href="/" >Let's Shop</Link></p>
                <ul>
                <li><Link href="/" >HOME</Link></li>
                    <li><Link href="/products/Mens" >MEN</Link></li>
                    <li><Link href="/products/Women" >WOMEN</Link></li>
                    <li><Link href="/products/Kids" >KIDS</Link></li>
                    <li><Link href="/products/Accessories">ACCESSORIES</Link></li>
                </ul>
            </div>}
        { search&&<div className="searchPanel"><input placeholder="TYPE YOUR SEARCH HERE" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} /> <button onClick={searchHandler} >SEARCH</button> <span><ImCancelCircle onClick={()=>setSearch(false)} /> </span> </div>  }        
        {login&&
        <div className="login">
        <div className="login-div">
            <div className="title">
                <div onClick={()=>{setLactive(true)}} className={lactive?'':'active'} >LOGIN</div>
                <div onClick={()=>{setLactive(false)}} className={lactive?'active':''} >REGISTER</div>
            </div>
            <div className="login-form">
              {form}
            </div>
        </div>
        </div>}
        </div>
    )
}
export default Navbar;