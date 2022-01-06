import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Profile = () => {
    const { user, logOut } = useAuth();
    return (
        <Container style={{ maxWidth: "30rem", marginBottom: "25px" }}>
        <Card classNameName="border-0 shadow">
          <Card.Header as={"h4"} classNameName="text-center border-0 mt-1">
            Profile
          </Card.Header>
          <Card.Body classNameName="card-body">
            <div classNameName="d-flex flex-column align-items-center text-center">
              <img
                src="https://i.ibb.co/5GzXkwq/user.png"
                alt="Admin"
                classNameName="rounded-circle"
                width="150"
              />
              <div classNameName="mt-3">
                <h4>{ user.displayName }</h4>
                <p classNameName="text-secondary mb-1">{ user.email }</p>
              </div>
              <Button onClick={logOut} classNameName="px-4 logout-btn btn-main">
                Logout
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
};

export default Profile;