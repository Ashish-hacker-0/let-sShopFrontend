import classes from './Footer.module.css';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FiFacebook} from 'react-icons/fi';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
const Footer = () => {
    return(
        <div className={classes.footer} >
            <div className={classes.top}>
                <p>
                    SUBSCRIBE TO NEWSLETTER
                </p>
                <input placeholder="Email Address"/>
                <button>SEND</button>
            </div>
            <ul>
                <li>HOME</li>
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
                <li>ACCESSORIES</li>
            </ul>
            <ul>
                <li>
                <AiOutlineInstagram/>
                </li>
                <li>
                    <FiFacebook/>
                </li>
                <li>
                    <AiOutlineTwitter/>
                </li>
                <li>
                    <FaLinkedinIn/>
                </li>
            </ul>
            <div className={classes.bottom}>
             <p> © 2021 Soft Cell, All Rights Reserved </p>
            </div>

        </div>
    )
}

export default Footer;