import { useState } from "react"
import Order from "./Order"
import OrderBar from "./OrderBar"

const Orders = () =>{

    const [order,setOrder] = useState(false);
    const [orderDetail, setOrderDetail] = useState({});
    
    const OrderDetail = (id) => {
        console.log(id);
        setOrder(true);
    }
    const confirm = (id) => {
        setOrder(false);
    }
    const cancel = (id) => {
        setOrder(false);
    }
    return(
        <div>
           {!order&&<div>
            <p>Orders</p>
                <OrderBar orderDetail={OrderDetail} />
                <OrderBar orderDetail={OrderDetail}/>
                <OrderBar orderDetail={OrderDetail}/>
                <OrderBar orderDetail={OrderDetail}/>
            </div>}
            {order&&<Order confirm={confirm} cancel={cancel} />}
        </div>
    )
}

export default Orders;