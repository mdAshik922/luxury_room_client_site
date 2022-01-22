import React from 'react';
import { Card } from 'react-bootstrap';
import './Project.css';
const ShowProject = ({project}) => {
    const {name, img, location} = project;

    return (
        <div  style={{ margin: "5px"}}>
           
       
  <Card.Img className="zoom" style={{ width: '250px', height: "300px" }} variant="top" src={img} />
 
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {location}
    </Card.Text>
 
  </Card.Body>


        </div>
    );
};

export default ShowProject;