import { useState } from "react";
import axios from "axios";
const UploadProducts = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    const [qty, setQty] = useState('');
    const [cat, setCat] = useState('');
    const [tags, setTags] = useState('');
    const [image,setImage] = useState('');
    const [status, setStatus] = useState('');
    const formsubmit= (e) =>{
      e.preventDefault();
      const formData = new FormData();
      formData.append('name',name);
      formData.append('price',price);
      formData.append('desc',desc);
      formData.append('qty',qty);
      formData.append('cat',cat);
      formData.append('tags',tags);
      formData.append('image',image);
      console.log(formData);

      axios.post('https://lets-shop-ashish.herokuapp.com/newProduct',formData)
      .then((response)=>{
        setStatus(response.status);
      })
      .catch(err=>console.log(err));
    }

    return(
        <div>
        {status==201&&<p>* Successfully added the product</p>}
        {}
          <p> UploadProduct</p> 
          <div className="product-form" >
          <form onSubmit={formsubmit}>
          <label>Product Name</label>
             <input required value={name} onChange={(e)=>setName(e.target.value)} />
             <label>Product Price</label>
             <input required value={price} onChange={(e)=>setPrice(e.target.value)}/>
             <label>Product Description</label>
             <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} ></textarea>
             <label>Product Quantity</label>
             <input required value={qty} onChange={(e)=>setQty(e.target.value)}/>
             <label>Product Category</label>
             <select required value={cat} onChange={(e)=>setCat(e.target.value)} >
               <option value="Accessories">Accessories</option>
               <option value="Bags">Bags</option>
               <option value="Kids">Kids</option>
               <option value="Mens">Mens</option>
               <option value="Women">Women</option>
               <option value="Shoes">Shoes</option>
             </select>
             <label>Product tags</label>
             <input required value={tags} onChange={(e)=>setTags(e.target.value)}/>
             <label>Product Image</label>
             <input type="file" required onChange={(e)=>setImage(e.target.files[0])} />
             <button type="submit" >SUBMIT</button>
             </form>
          </div>


        </div>
    )
}
export default UploadProducts;