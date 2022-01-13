import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Spinner, Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from '../../../Hooks/useAuth';

const Order = () => {
  const { user } = useAuth();
  const [ orders, setOrders ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    fetch(`https://aqueous-hollows-73658.herokuapp.com/order?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => toast.error(error.message));
  }, [user.email]);

  const deletion = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure to delete this order?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://aqueous-hollows-73658.herokuapp.com/deleteOrder/${id}`, {
          method: 'DELETE',
          headers: {
              'content-type': 'application/json'
          }
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            if (data.deletedCount) {
              const modifiedOrders = orders.filter((order) => order._id !== id);
              setOrders(modifiedOrders);
              Swal.fire("Deleted!", "", "success");
            }
          });
      }
    });
  };

  return (
    <div className="px-2  mx-md-2 bg-white" style={{ borderRadius: "15px" }}>
      <h3 className="text-center fw-bold mb-4">My orders</h3>
      {loading ? (
        <div className="text-center my-5 private-spinner py-5">
          <Spinner variant="danger" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h6>{loading}</h6>
        </div>
      ) : (
        
        <table responsive="true" hover="true" borderless="true">
          <Toaster position="bottom-left" reverseOrder={ false } />
          <thead className="bg-light">
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Status</th>
              <th>Deletion</th>
            </tr>
          </thead>
          {orders.map((order) => {
            return (
              <tbody key={ order._id } style={{ fontWeight: "500" }}>
                <tr>
                  <td>
                    <img width="100px" src={ order.img } alt="" />
                  </td>
                  <td>{ order.name }</td>
                  
                  <td>
                    <button
                      style={{ width: "100px" }}
                      className={
                        order.status === "Pending"
                          ? "btn btn-danger"
                          : order.status === "Done"
                          ? "btn btn-success"
                          : "btn btn-info"
                      }
                    >
                      { order.status }
                    </button>
                  </td>
                  <td>
                    <Button
                      variant="outline-danger"
                      className="p-1 ml-3 mb-0"
                      onClick={() => deletion(order._id)}
                    ><i className="fas mx-1 fa-trash"></i>
                      
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            );
          })};
        </table>
      )};
    </div>
  );
};

export default Order;