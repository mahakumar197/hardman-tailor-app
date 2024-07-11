import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const CustomerList = ({ customers, onEdit }) => {
  return (
    <Row>
      {customers.map((customer) => (
        <Col sm={6} md={12} lg={12} key={customer.id} className="mb-4">
          <Card onClick={() => onEdit(customer)} className="h-100">
            <Card.Body>
              <Card.Title>{customer.Name}</Card.Title>
              {/* <Card.Text>ID: {customer.id}</Card.Text> */}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CustomerList;
