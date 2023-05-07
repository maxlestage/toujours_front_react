import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";

import axios from "axios";

axios.defaults.withCredentials = false;

function Login_form() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mail: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await userSignUp(formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("", name, value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function userSignUp(data) {
    return axios.post("http://0.0.0.0:7878/signup", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="Firstname">Firstname</Form.Label>
        <Form.Control
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          placeholder="Johnny"
        />

        <Form.Label htmlFor="Lastname">Lastname</Form.Label>
        <Form.Control
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Terreur"
        />

        <Form.Label htmlFor="Mail">Mail </Form.Label>
        <Form.Control
          type="email"
          name="mail"
          value={formData.mail}
          onChange={handleChange}
          placeholder="user@hostmail.com"
        />

        <Form.Label htmlFor="Password">Password </Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Login_form;
