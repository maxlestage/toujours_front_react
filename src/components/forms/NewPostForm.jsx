import React, { useState, useEffect } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { postNewData } from "../../services/dataServices";

const NewPostForm = () => {
  const user = localStorage.getItem("user");
  const userParseData = JSON.parse(user);
  const userId = userParseData.id;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    path: "",
    user_id: userId,
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await postNewData(formData);
      setIsFormSubmitted(true);
    } catch (error) {
      console.error("Error", error);
    }

    setFormData({
      title: "",
      description: "",
      path: "",
      user_id: userId,
    });
  };

  useEffect(() => {
    if (isFormSubmitted) {
      window.location.reload();
      setIsFormSubmitted(false); // Réinitialiser l'état du formulaire soumis
    }
  }, [isFormSubmitted]);

  const isFormValid =
    formData.title.length >= 5 &&
    formData.description.length >= 5 &&
    formData.path.length >= 5;

  return (
    <Card style={{ width: "80%", margin: "0 auto" }}>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              required
              minLength={5}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              required
              minLength={5}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPath">
            <Form.Label>Path</Form.Label>
            <Form.Control
              type="text"
              name="path"
              value={formData.path}
              onChange={handleChange}
              placeholder="Enter path"
              required
              minLength={5}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="float-end"
            disabled={!isFormValid}
          >
            Ajouter
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NewPostForm;
