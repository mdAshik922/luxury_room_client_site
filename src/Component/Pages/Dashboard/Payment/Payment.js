import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router';
import { Spinner, Button, Modal, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useFirebase";
import { Link } from 'react-router-dom';

const Payment = () => {
    const { user } = useAuth();
  const [ payments, setPayments ] = useState({});
  const [ paying, setPaying ] = useState([]);
  const [ loading, setLoading ] = useState(true);
const{Pay} = useParams();

  // useEffect(() => {
  //   fetch(`http://localhost:5000/pay/${Pay}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => toast.error(error.message));
  // }, [Pay]);

  useEffect(() => {
    fetch(`https://aqueous-hollows-73658.herokuapp.com/order?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPaying(data);
        setLoading(false);
      })
      .catch((error) => toast.error(error.message));
  }, [user.email]);

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
          
          <Table responsive hover borderless>
            <Toaster position="bottom-left" reverseOrder={ false } />
            <thead className="bg-light">
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Payment</th>
              </tr>
            </thead>
            {paying.map((payment) => {

              return (
                <tbody key={ payment._id } style={{ fontWeight: "500" }}>
                  <tr>
                    <td>
                      <img width="100px" src={ payment.img } alt="" />
                    </td>
                    <td>{ payment.name }</td>
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
            <h3>${payment.price}</h3>
            <img width="100px" src={ payment.img } alt="product" />
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
                  </tr>
                </tbody>
              )
            })
            }
          </Table>
        )}

      </div>
    );
};

export default Payment;