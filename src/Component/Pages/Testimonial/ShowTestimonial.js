import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';

const ShowTestimonial = ({testimonial}) => {
    const { name, email,  img, description, rating } = testimonial;
    return (
        <div>
              <Card style={{ minHeight: "375px" }} >
      <Card.Img variant="top"  src={img} width="60" />
      <Card.Body classNameName="text-center">
        <h5>
          {name} <br />
          <span>{email}</span>
        </h5>
        <h6>
          Raging:
          <Rating
            classNameName="text-warning"
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            initialRating={rating}
            readonly
          />{" "}
          {rating}
        </h6>
        <Card.Text>{description?.slice(0, 140)}</Card.Text>
      </Card.Body>
    </Card>
        </div>
    );
};

export default ShowTestimonial;