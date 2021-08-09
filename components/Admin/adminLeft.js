const AdminLeft = ({setProducts , setProduct, setOrder, setUser}) => {
    return(
        <div className="admin-left">
            <ul>
                <li onClick={setProduct} >Upload Product</li>
                <li onClick={setProducts} >Products</li>
                <li onClick={setUser} >Manage Users</li>
                <li onClick={setOrder} >Manage Orders</li>

            </ul>
        </div>
    )
}
export default AdminLeft;