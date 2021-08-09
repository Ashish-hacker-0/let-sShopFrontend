const OrderBar = ({orderDetail}) => {
    return(
        <div className="order-bar">
            <p>Order id</p>
            <p>Product Id</p>
            <p>User Id</p>
            <p>Price</p>
            <button onClick={()=>orderDetail(5)} >View Details</button>
        </div>
    )
}
export default OrderBar;