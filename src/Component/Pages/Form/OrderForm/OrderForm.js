import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {  useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';


const OrderForm = () => {
   const { user } = useAuth(); 
    const [orders, setOrders] = useState({});
    const {id} = useParams();
    const navigat = useNavigate();

    useEffect(() => {
      const uri = `https://aqueous-hollows-73658.herokuapp.com/service/${id}`;
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setOrders(data));
    },[id]);
  
    const { register, handleSubmit, reset } = useForm();
   
      const onSubmit = (data) => {
        Swal.fire({
          icon: "warning",
          title: "Do you want to confirm your order?",
          showCancelButton: true,
          confirmButtonText: "Yes",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch("https://aqueous-hollows-73658.herokuapp.com/order", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ ...data, ...orders }),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire("Confirmed!", "", "success");
                  navigat("/dashboard/myorder");
                }
              });
          }
        });
      };
  
    return (
      <>
        
          <Container>
            <Row classNameName="align-items-center">
           
              <Col classNameName="my-4" sm={12} md={6}>
                <h2 classNameName="text-center feature">Please confirm order</h2>
                <div classNameName="mt-5">
       
                 
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Row classNameName="mt-3">
                      <Col sm={12} md={6}>
                        <label htmlFor="name">
                          <b>Name</b>
                        </label>
                        <input
                          id="name"
                          required
                          type="text"
                          classNameName="form-control"
                          {...register("name")}
                          defaultValue={ user.displayName }
                          placeholder="your name"
                        />
                      </Col>
                      <Col sm={12} md={6}>
                        <label htmlFor="email">
                          <b>Email</b>
                        </label>
                        <input
                          id="email"
                          required
                          type="email"
                          readOnly
                          defaultValue={ user.email }
                          classNameName="form-control"
                          {...register("email")}
                          placeholder="your email"
                        />
                      </Col>
                    </Row>
                    <Row classNameName="my-4">
                      <Col>
                        <label htmlFor="address">
                          <b>Address</b>
                        </label>
                        <input
                          id="address"
                          required
                          type="text"
                          classNameName="form-control"
                          {...register("address")}
                          placeholder="Enter your address"
                        />
                      </Col>
                    </Row>
                    <Row classNameName="my-4">
                      <Col>
                        <label htmlFor="phone">
                          <b>Phone</b>
                        </label>
                        <input
                          id="phone"
                          required
                          type="number"
                          classNameName="form-control"
                          {...register("phone")}
                          placeholder="Enter your phone"
                        />
                      </Col>
                    </Row>
                    <input
                      value="Order Now"
                      classNameName="btn btn-primary"
                      type="submit"
                    />
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        
      </>
    );
  };

export default OrderForm;