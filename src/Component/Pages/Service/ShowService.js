import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowService = ({service}) => {
    const { name, price, description, img, _id } = service || {};
    return (
        <div style={{ margin: "3px"}}>
           
         <Card  style={{ width: '18rem' }}>
        <Card.Img  style={{ width: '45%', marginLeft: "auto", marginRight: "auto", alignItems: "center" }} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           ${price}
          </Card.Text>
          <Card.Text>
          {description}
          </Card.Text>
       
        </Card.Body>
      </Card>
      <Link to={`/orderPage/${_id}`}>
              <Button
               style={{ backgroundColor: 'black',  color: 'whitesmoke',
               }}
               >Purches</Button>
              </Link>
              </div>
    );
};

export default ShowService;