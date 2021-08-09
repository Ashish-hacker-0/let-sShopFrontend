
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useCookies} from 'react-cookie';
const UserLeft = ({setIsloggedIn, isloggedIn }) => {

    const Router = useRouter();
    const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
    const logout = async ()=> {
        await setIsloggedIn(false);
        await removeCookie('access_token');
        console.log(isloggedIn);
        
        await Router.push('/');
        window.location.reload();
    }
    return(
        <div className="user-left">
            <ul>
                <li><Link href="/user-dashboard"> Dashboard</Link></li>
                <li><Link href="/user-dashboard/orders">  Orders</Link></li>
                <li><Link href="/user-dashboard/UpdateProfile"> Update Profile</Link></li>
                <li onClick={logout} className="logout" >Log Out</li>
            </ul>
        </div>
    )
}
export default UserLeft;