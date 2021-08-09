const Order = ({confirm, cancel}) =>{
    return(
        <div className="order-details">
            <p>Order Id</p>
            <p>User Name</p>
            <p>Product Id</p>
            <p>Product Name</p>
            <p>Product Price</p>
            <p>Payment status</p>
            <div>
            <button onClick={()=>confirm(123)} >CONFIRM</button><button onClick={()=>cancel(123)} >CANCEL</button>
            </div>
        </div>
    )
}

export default Order;