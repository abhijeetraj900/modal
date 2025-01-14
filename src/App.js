import React, { useState } from "react";
import "./App.css";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleOpenModal = () => setModalOpen(true);

  const handleCloseModal = (e) => {
    if (e.target.className === "modal") {
      setModalOpen(false);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = () => {
    const { username, email, phone, dob } = formData;

    // Validation for empty fields
    if (!username || !email || !phone || !dob) {
      alert("All fields are required. Please fill out all fields.");
      return;
    }

    // Email validation
    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    // Phone validation
    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    // DOB validation
    const currentDate = new Date();
    const enteredDate = new Date(dob);
    if (enteredDate > currentDate) {
      alert("Invalid date of birth. Date cannot be in the future.");
      return;
    }

    // Close modal and reset form
    alert("Form submitted successfully!");
    setModalOpen(false);
    setFormData({
      username: "",
      email: "",
      phone: "",
      dob: "",
    });
  };

  return (
    <div className="app">
      <h1> User Details Modal</h1>
      {!isModalOpen && (
        <button onClick={handleOpenModal}>Open Form</button>
      )}

      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <h2>Fill the Form</h2>
            <form>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleInputChange}
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
              />

              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />

              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleInputChange}
              />

              <button
                type="button"
                className="submit-button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
