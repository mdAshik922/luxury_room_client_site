import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Spinner, Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from '../../../Hooks/useAuth';

const Payment = () => {
    return (
        <div className="px-2  mx-md-2 bg-white" style={{ borderRadius: "15px" }}>
        <h3 className="text-center fw-bold mb-4">My orders</h3>
        {loading ? (
          <div className="text-center my-5 private-spinner py-5">
            <Spinner variant="danger" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <h6>Loading...</h6>
          </div>
        ) : (
          
          <Table hover borderless responsive>
            <Toaster position="bottom-left" reverseOrder={ false } />
            <thead className="bg-light">
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Payment</th>
                
              </tr>
            </thead>
            {orders.map((payment) => {
              return (
                <tbody key={ payment._id } style={{ fontWeight: "500" }}>
                  <tr>
                    <td>
                      <img width="100px" src={ payment.img } alt="" />
                    </td>
                    <td>{ payment.name }</td>
                    
                    <td>
                      <Button
                        variant="outline-danger"
                        className="p-1 ml-3 mb-0"
                       
                      >
                        <i className="fas mx-1 fa-trash"></i>
                       
                      </Button>
                    </td>
                  </tr>
                </tbody>
              );
            })};
          </Table>
        )};
      </div>
    );
};

export default Payment;