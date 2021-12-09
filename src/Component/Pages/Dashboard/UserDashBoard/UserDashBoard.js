import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './UserDashBoard.css';


const UserDashBoard = () => {
   
  const { user} = useAuth();
  const [users, setUsers] = useState({});
  
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://aqueous-hollows-73658.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, [user.email]);
 
  if (loading) {
    return (
      <div className="text-center my-5 private-spinner py-5">
        <Spinner variant="danger" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h6>Loading...</h6>
      </div>
    );
  };

    return (
        <div>
        
        <div className="mx-2 dashboard">
          <Row>
            <Col className="admin-side-bar">
              <div>
                <ul>
                  {users?.admin === true ? (
                    <h6 className="fw-bold text-uppercase">Admin Dashboard</h6>
                  ) : (
                    <h6 className="fw-bold text-uppercase">User Dashboard</h6>
                  )}
  
                  {users?.admin !== "false" && (
                    <li className="sideBarLink">
                      <NavLink to="/dashBoard/profile">
                        <i className="fas fa-user-circle"></i> Profile
                      </NavLink>
                    </li>
                  )}
  
                  {users?.admin === true && (
                    <li className="sideBarLink">
                      <NavLink to="/orders">
                        <i className="fas fa-list"></i> Order List
                      </NavLink>
                    </li>
                  )}
  
                  {users?.admin !== "false" && (
                    <li className="sideBarLink">
                      <NavLink to="/dashBoard/myorder">
                        <i className="fas fa-cart-arrow-down"></i> My order
                      </NavLink>
                    </li>
                  )}
  
                  {users?.admin === true && (
                    <li className="sideBarLink">
                      <NavLink to="/addProduct">
                        <i className="fas fa-file-medical"></i> Add Product
                      </NavLink>
                    </li>
                  )}
                  {users?.admin === true && (
                    <li className="sideBarLink">
                      <NavLink to="/dashBoard/makeAdmin">
                        <i className="fas fa-user-plus"></i>Make admin
                      </NavLink>
                    </li>
                  )}
                  {users?.admin !== "false" && (
                    <li className="sideBarLink">
                      <NavLink to="/dashBoard/payment/:id">
                        <i className="fab fa-amazon-pay"></i>Payment
                      </NavLink>
                    </li>
                  )}
                  {users?.admin === true && (
                    <li className="sideBarLink">
                      <NavLink to="/manageProduct">
                        <i className="fas fa-cog"></i> Manage Products
                      </NavLink>
                    </li>
                  )}
                  {users?.admin === true && (
                    <li className="sideBarLink">
                      <NavLink to="/dashBoard/testimonialForm">
                        <i className="fas fa-comment-dots"></i> Review
                      </NavLink>
                    </li>
                  )}
                </ul>
              </div>
            </Col>
            <Col md={8} lg="9" className="admin-container">
           <Outlet></Outlet>
            </Col>
          </Row>
        </div>
      </div>
    );
};

export default UserDashBoard;