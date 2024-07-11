// utils/api.js

const API_URL = "https://sheetdb.io/api/v1/yxpmzp4gdv8ve";

// Function to fetch all customers
export const readGoogleSheet = () => {
  return fetch(API_URL).then((response) => response.json());
};

// utils/api.js

// const API_URL = "https://sheetdb.io/api/v1/yxpmzp4gdv8ve";

// Function to add a new customer
export const addCustomer = (formData) => {
  return fetch(API_URL, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response from addCustomer:", data); // Check response in console
      return data; // Return the response JSON for further processing if needed
    })
    .catch((error) => {
      console.error("Error adding customer:", error); // Log any errors
      throw error; // Throw the error for handling in the calling component
    });
};


// Function to update an existing customer by ID
export const updateCustomer = (id, customer) => {
  return fetch(`${API_URL}/id/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: customer,
    }),
  }).then((response) => response.json());
};

// Function to delete a customer by ID
export const deleteCustomer = (id) => {
  return fetch(`${API_URL}/id/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};
