import { useState } from "react";
import AdminLeft from "../../components/Admin/adminLeft";
import Orders from "../../components/Admin/Orders";
import UploadProducts from "../../components/Admin/UploadProducts";
import Users from "../../components/Admin/Users";
import AllProducts from "../../components/Admin/AllProducts";
const admin = () => {

    const [userName, setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [notMatch, setNotmatch] = useState(false);
    const [Auth, setAuth] = useState(false);
    const [user,setUser] = useState(false);
    const [order,setOrder] = useState(false);
    const [product,setProduct] = useState(true);
    const [products,setProducts] = useState(false);
    const setOrderl = () =>{
        setOrder(true);
        setUser(false);
        setProducts(false);
        setProduct(false);
    }
    const setProductl = () =>{
        setOrder(false);
        setUser(false);
        setProducts(false);
        setProduct(true);
    }
    const setProductsl = () =>{
        setOrder(false);
        setUser(false);
        setProducts(true);
        setProduct(false);
    }
    const setUserl = () =>{
        setOrder(false);
        setUser(true);
        setProducts(false);
        setProduct(false);
    }
    const adminLogin = (e) => {
        e.preventDefault();
        if(userName==='admin'&&password==='admin123'){
            setNotmatch(false);
            setAuth(true);
        }else{
            setNotmatch(true);
        }
    }
    return(
        <div>
        <div className="admin-login">
            
            {!Auth&&<p>Admin Login</p>}
           {notMatch&& <div className="wrong" > * Admin credentials Not Match</div>}
           {!Auth && <div>
                <input placeholder="UserName" value={userName} onChange={(e)=>setUserName(e.target.value)} />
                <input placeholder="Password" type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button onClick={adminLogin} >LOGIN</button>
            </div>}
            </div>
            {
             Auth&&<div className="admin-dashboard">
                    <div>
                       <AdminLeft setProduct={setProductl} setProducts={setProductsl} setUser={setUserl} setOrder={setOrderl}/>
                    </div>
                    <div className="admin-right">
                        {product&&<UploadProducts  />}
                       {products&&<AllProducts/> }
                        {user&&<Users  />}
                        {order&&<Orders  />}
                    </div>
             </div>
            }
        </div>
    )
}

export default admin;