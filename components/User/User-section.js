import { useEffect } from "react";
import UserLeft from "./UserLeft";
import {useRouter} from 'next/router';


const UserSection = ({children, setIsloggedIn, isloggedIn}) =>{
    return(
        <div className="user-section">
          <div className="left">
           <UserLeft setIsloggedIn={setIsloggedIn} isloggedIn={isloggedIn} />
          </div>
          <div className="right">
              {children}
          </div>
        </div>
    )
}

export default UserSection;