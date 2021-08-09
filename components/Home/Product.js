import Image from 'next/image';
import Link from 'next/link';
const Product = ({image, name, price, type, id})=> {
    const myLoader=({src})=>{
        return `http://localhost:8001/static/images/${image}`;
     }
    return(
        <Link href={`/product/${id}`}>
        <div className="product">
           <div className="image">
             <Image loader={myLoader} src={`http://localhost:8001/static/images/${image}`} height="300px" width="290px" />
           </div>
           <div className="detail">
              <p>{type}</p>
              <p>{name}</p>
              <p>{'\u20B9'}{price}.00</p>
           </div>
        </div>
        </Link>
    )
}

export default Product;