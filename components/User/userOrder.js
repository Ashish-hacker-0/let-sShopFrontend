import Image from 'next/image';
const Order = ({o}) => {
    console.log("userOrder",o);
    const price =10;
    const qnty  = 4;
    const myLoader=({src})=>{
        return `https://lets-shop-ashish.herokuapp.com/static/images/${o.image}`;
    }
    return(
        <div className="user-product">
        <div>  <Image loader={myLoader} src={`https://lets-shop-ashish.herokuapp.com/static/images/${o.image}`} height="30px" width="40px"/> </div>
        <div> {o.name} </div>
        <div> {'\u20B9'}{o.price}.00 </div>
        <div>  {o.qnty} </div>
        <div> {'\u20B9'}{o.total}.00 </div>
        <div>{o.status}</div>
    </div>
    )
}
export default Order;