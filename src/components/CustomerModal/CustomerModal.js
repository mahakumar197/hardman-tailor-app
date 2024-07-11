import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CustomerModal = ({
  show,
  onHide,
  customer,
  setCustomer,
  handleSave,
  handleImageChange,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          {customer.id ? "Edit Customer" : "Add Customer"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formCustomerName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="Name"
              value={customer.Name || ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formCustomerImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              name="Image"
              onChange={handleImageChange}
            />
          </Form.Group>
          {[
            "Suit",
            "Waist Coat",
            "Bandhi",
            "Indowestern",
            "shirt",
            "kurta",
            "shoulder",
            "sleeve length",
            "chest",
            "waist",
            "seat",
            "neck",
            "bicep",
          ].map((field) => (
            <Form.Group controlId={`formCustomer${field}`} key={field}>
              <Form.Label>{field}</Form.Label>
              <Form.Control
                type="text"
                name={field}
                value={customer[field] || ""}
                onChange={handleChange}
              />
            </Form.Group>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomerModal;
