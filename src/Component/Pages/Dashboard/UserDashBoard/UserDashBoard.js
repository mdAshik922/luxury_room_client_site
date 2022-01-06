import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './UserDashBoard.css';


const UserDashBoard = () => {
   
  const { user, loading, setLoading} = useAuth();
  const [users, setUsers] = useState({});
  
  
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
      <div classNameName="text-center my-5 private-spinner py-5">
        <Spinner variant="danger" animation="border" role="status">
          <span classNameName="visually-hidden">Loading...</span>
        </Spinner>
        <h6>Loading...</h6>
      </div>
    );
  };

    return (
        <div>
        
        <div classNameName="mx-2 dashboard">
          <Row>
            <Col classNameName="admin-side-bar">
              <div>
                <ul>
                  {users?.admin === true ? (
                    <h6 classNameName="fw-bold text-uppercase">Admin Dashboard</h6>
                  ) : (
                    <h6 classNameName="fw-bold text-uppercase">User Dashboard</h6>
                  )}
  
                  {users?.admin === false && (
                    <li classNameName="sideBarLink">
                      <NavLink to="/dashBoard/profile">
                        <i classNameName="fas fa-user-circle"></i> Profile
                      </NavLink>
                    </li>
                  )}
  
                  {users?.admin === true && (
                    <li classNameName="sideBarLink">
                      <NavLink to="/dashBoard/userOrderList">
                        <i classNameName="fas fa-list"></i> Order List
                      </NavLink>
                    </li>
                  )}
  
                  {users?.admin === false && (
                    <li classNameName="sideBarLink">
                      <NavLink to="/dashBoard/myOrder">
                        <i classNameName="fas fa-cart-arrow-down"></i> My order
                      </NavLink>
                    </li>
                  )}
  
                 {users?.admin === false && (
                    <li classNameName="sideBarLink">
                      <NavLink to="/dashBoard/testimonialForm">
                        <i classNameName="fas fa-comment-dots"></i> Review
                      </NavLink>
                    </li>
                  )}

                  {users?.admin === true && (
                    <li classNameName="sideBarLink">
                      <NavLink to="/dashBoard/addProduct">
                        <i classNameName="fas fa-file-medical"></i> Add Product
                      </NavLink>
                    </li>
                  )}
                  {users?.admin === true && (
                    <li classNameName="sideBarLink">
                      <NavLink to="/dashBoard/makeAdmin">
                        <i classNameName="fas fa-user-plus"></i>Make admin
                      </NavLink>
                    </li>
                  )}
                  {users?.admin === false && (
                    <li classNameName="sideBarLink">
                      <NavLink to="/dashBoard/payment/:id">
                        <i classNameName="fab fa-amazon-pay"></i>Payment
                      </NavLink>
                    </li>
                  )}
                  {users?.admin === true && (
                    <li classNameName="sideBarLink">
                      <NavLink to="/dashBoard/manageProduct">
                        <i classNameName="fas fa-cog"></i> Manage Products
                      </NavLink>
                    </li>
                  )}
                  
                
                </ul>
              </div>
            </Col>
            <Col md={8} lg="9" classNameName="admin-container">
           <Outlet></Outlet>
            </Col>
          </Row>
        </div>
      </div>
    );
};

export default UserDashBoard;