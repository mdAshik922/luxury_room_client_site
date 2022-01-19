import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import OrderForm from '../../Form/OrderForm/OrderForm';

const OrderPage = () => {
    const [orders, setOrders] = useState({});
    const {id} = useParams();
    
    useEffect(() => {
      const uri = `https://aqueous-hollows-73658.herokuapp.com/service/${id}`;
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setOrders(data));
    },[id]);
    
    return (
        <div>
            <h2>Please Order now</h2>
            <div>
     <img src={orders.img} alt="product"/>
           <h3>{orders.name}</h3>
           <h2>${orders.price}</h2>
            </div>
          <OrderForm></OrderForm>
        </div>
    );
};

export default OrderPage;