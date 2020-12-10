import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Schema = yup.object().shape({
  FirstName: yup
    .string()
    .required("Please enter your first name")
    .min(2, "Minimum for first name is 2 characters."),
  LastName: yup
    .string()
    .required("Please enter your last name")
    .min(2, "Minimum for last name is 2 characters."),
  Email: yup
    .string()
    .email("Invalid email address.")
    .required("Please enter an email"),
  Message: yup
    .string()
    .required()
    .min(10, "Please enter a message with more than 10 characters"),
});

function Contact() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = () => document.querySelector(".success").append("Success");
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <p className="success" style={{ color: "Green" }}></p>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          name="FirstName"
          placeholder="First name..."
          ref={register({ required: true, minLength: 2 })}
        />
        <p>
          <b>
            <i>{errors.FirstName?.message}</i>
          </b>
        </p>
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          name="LastName"
          placeholder="Last name..."
          ref={register}
        />
        <p>
          <b>
            <i>{errors.LastName?.message}</i>
          </b>
        </p>
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control name="Email" placeholder="Email..." ref={register} />
        <p>
          <b>
            <i>{errors.Email?.message}</i>
          </b>
        </p>
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          name="Message"
          placeholder="Enter your message..."
          ref={register}
        />
        <p>
          <b>
            <i>{errors.Message?.message}</i>
          </b>
        </p>
      </Form.Group>

      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contact;
