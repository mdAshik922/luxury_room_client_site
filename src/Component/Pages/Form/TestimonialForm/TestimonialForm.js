import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import Swal from "sweetalert2";
import { Col, Form, Row } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import useAuth from "../../../Hooks/useAuth";

const TestimonialForm = () => {
    const navigate = useNavigate();
    const [rating, setRating] = useState(5);
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
  
    const onSubmit = (data) => {
      data.img = user.photoURL || "https://i.ibb.co/5GzXkwq/user.png";
      data.email = user.email;
      data.rating = rating;
  
      Swal.fire({
        icon: "warning",
        title: "Do you want to rate?",
        showCancelButton: true,
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch("https://aqueous-hollows-73658.herokuapp.com/review", {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire("Publish on review section!", "", "success");
                navigate("/");
              }
            });
        }
      });
  
      reset();
    };
    return (
        <div>
             <h3 >Give a feedback</h3>
             <Form onSubmit={handleSubmit(onSubmit)} classNameName="w-100 form-main">
        <div
          classNameName="p-3 mx-auto  bg-white"
          style={{ borderRadius: "15px", maxWidth: "50rem" }}
        >
          <Row classNameName="justify-content-center">
            <Col md={6}>
              <Form.Group>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Your Name
                </Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={user.displayName}
                  {...register("name", { required: true })}
                  placeholder="Enter your name"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <h6 classNameName="fw-bold mt-1 mb-2">Your Rating</h6>
              <Rating
                classNameName="text-warning fs-3"
                emptySymbol="far fa-star "
                fullSymbol="fas fa-star "
                onChange={(rate) => setRating(rate)}
                initialRating={rating}
                fractions={2}
              />
              <h4 classNameName="d-inline-block ms-2">{rating}</h4>
            </Col>
          </Row>
          <Row style={{margin: "2px"}}>
            <Col>
              <Form.Group>
                <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
                <Form.Control
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your email"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row style={{margin: "2px"}}>
            <Form.Group as={Col} md={12}>
              <Form.Label style={{ fontWeight: "bold" }}>
                Description
              </Form.Label>
              <Form.Control
                style={{ height: "10rem" }}
                type="text"
                as="textarea"
                {...register("description", { required: true })}
                placeholder="Enter a description"
              />
            </Form.Group>
          </Row>
          <div style={{marginTop: "4px"}}>
            <Button
              type="submit"
              classNameName="btn-main"
              style={{ padding: ".6rem 2rem" }}
            >
              Submit
            </Button>
          </div>
        </div>
      </Form>
        </div>
    );
};

export default TestimonialForm;