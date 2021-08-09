import { useState, useEffect, useRef } from "react";
import classes from './Slider.module.css';
const Slider = () => {
    const [index,setIndex] = useState(0);
    
    useEffect(()=>{
         setTimeout(()=>{
            if(index===2){
                setIndex(0);
            }else{
                setIndex(index+1);
            }
        },3000);
        
        
     return ()=> {}
    },[index]);
    
    return(
        <div className={classes.slidershow}>
            <div style={{backgroundColor:'black'}} style={{transform:`translate3d(${-index * 100}%, 0, 0)` }}  className={classes.slidercontainer}>
                <div className={classes.slider} >
                   <p>CELEBRATE THIS SUMMER</p>
                   <p>30% OFF</p>
                   <button>SHOP NOW</button>
                   <ul>
                       <li>SALE MEN</li>
                       <li>SALE WOMEN</li>
                       <li>SALE KIDS</li>
                   </ul>
                </div>
                <div className={classes.slider} >
                <p>CASUAL WEAR ESSENTIALS</p>
                   <p>OF 2021</p>
                   <button>SHOP NOW</button>
                   <ul>
                       <li>SALE MEN</li>
                       <li>SALE WOMEN</li>
                       <li>SALE KIDS</li>
                   </ul>
                </div>
                <div className={classes.slider}>
                <p>INIMITABLE APPAREL FOR</p>
                   <p>EVERYONE</p>
                   <button>SHOP NOW</button>
                   <ul>
                       <li>SALE MEN</li>
                       <li>SALE WOMEN</li>
                       <li>SALE KIDS</li>
                   </ul>
                </div>
            </div>
        </div>
    )
}

export default Slider;