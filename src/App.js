import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import CustomerList from "./components/CustomerList/CustomerList";
import CustomerModal from "./components/CustomerModal/CustomerModal";
import {
  readGoogleSheet,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} from "./utils/api";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState({});

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    readGoogleSheet().then((data) => setCustomers(data));
  };

  const handleSave = () => {
    if (currentCustomer.id) {
      // If customer has an ID, update the customer
      updateCustomer(currentCustomer.id, currentCustomer).then(() => {
        fetchCustomers();
        setShowModal(false);
      });
    } else {
      // If customer doesn't have an ID, add as new customer
      const formData = new FormData();
      formData.append("data", JSON.stringify(currentCustomer));
      if (currentCustomer.Image) {
        formData.append("files.Image", currentCustomer.Image[0]);
      }
      addCustomer(formData).then(() => {
        fetchCustomers();
        setShowModal(false);
      });
    }
  };

  const handleDelete = (id) => {
    deleteCustomer(id).then(() => {
      fetchCustomers();
    });
  };

  const openModal = (customer = {}) => {
    setCurrentCustomer(customer);
    setShowModal(true);
  };

  const handleImageChange = (e) => {
    setCurrentCustomer({ ...currentCustomer, Image: e.target.files });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tailor App</h1>
        <Button variant="primary" onClick={() => openModal()}>
          Add Customer
        </Button>
        <CustomerList
          customers={customers}
          onEdit={openModal}
          onDelete={handleDelete}
        />
        <CustomerModal
          show={showModal}
          onHide={() => setShowModal(false)}
          customer={currentCustomer}
          setCustomer={setCurrentCustomer}
          handleSave={handleSave}
          handleImageChange={handleImageChange}
        />
      </header>
    </div>
  );
};

export default App;
