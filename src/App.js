import React, { useState } from "react";
import "./App.css"; // Ensure you have appropriate styles

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (event) => {
    // Close the modal only if the user clicks outside the modal content
    if (event.target.className === "modal") {
      setIsModalOpen(false);
    }
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    const { username, email, phone, dob } = formData;

    if (!username || !email || !phone || !dob) {
      alert("All fields are required.");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const today = new Date();
    const dobDate = new Date(dob);
    if (dobDate > today) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    alert("Form submitted successfully!");
    setIsModalOpen(false);
    setFormData({ username: "", email: "", phone: "", dob: "" });
  };

  return (
    <div className="app">
      <div className="modal">
        <div className="modal-content">
          <h1>User Detail Modal</h1> {/* Heading */}
          {!isModalOpen && (
            <button onClick={handleOpenModal}>Open Form</button>
          )}
        </div>
      </div>

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
