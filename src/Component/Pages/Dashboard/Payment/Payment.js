import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Spinner, Table, Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useFirebase";

const Payment = () => {
    const { user } = useAuth();
  const [ paying, setPaying ] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  const [ loading, setLoading ] = useState(true);


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
            {paying.map((payment) => {
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
                        pay
                      </Button>
                    </td>
                  </tr>
                </tbody>
              );
            })};
          </Table>
        )};

    <Modal
      
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button >Close</Button>
      </Modal.Footer>
    </Modal>
 
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <Payment
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>



      </div>
    );
};

export default Payment;