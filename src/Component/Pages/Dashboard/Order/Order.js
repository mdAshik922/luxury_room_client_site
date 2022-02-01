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
    // fetch(`http://localhost:5000/order?email=${user.email}`)
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
            if (data.deletedCount) {
              const modifiedOrders = orders.filter((order) => order._id !== id)
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
        <div className="text-center my-5 py-5 private-spinner">
          <Spinner variant="danger" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h6>{loading}</h6>
        </div>
      ) : (
        
        <Table responsive hover borderless>
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
                    <img width="100px" src={ order.img } alt="product" />
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
                      } >
                      { order.status } </button>
                  </td>
                  <td>
                      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Pay</button>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Payment</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <h3>${order.price}</h3>
            <img width="100px" src={ order.img } alt="product" />
            <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">Message:</label>
            <textarea className="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Confirm</button>
      </div>
    </div>
  </div>
</div>
                    </td>
                  <td>
                    <Button  variant="outline-danger"
                      className="p-1 ml-3 mb-0"
                      onClick={() => deletion(order._id)}>
                        <i className="fas mx-1 fa-trash"></i>
                       Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            )
          })}
        </Table>
      )}
    </div>
  );
};

export default Order;