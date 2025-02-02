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

  // Open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Close the modal when clicking outside of it
  const handleCloseModal = (event) => {
    if (event.target.className === "modal") {
      setIsModalOpen(false);
    }
  };

  // Handle input change and update the form data
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle form submission with validation
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const { username, email, phone, dob } = formData;
  
    // Validate email if filled
    if (email && !email.includes("@")) {
      alert("Invalid email");
      return;
    }
  
    // Validate phone if filled
    const phoneRegex = /^\d{10}$/;
    if (phone && !phoneRegex.test(phone)) {
      alert("Invalid phone number");
      return;
    }
  
    // Validate date of birth if filled
    const today = new Date();
    const dobDate = new Date(dob);
    if (dob && dobDate > today) {
      alert("Invalid date of birth");
      return;
    }
  
    // Validate username only if present
    if (!username.trim()) {
      alert("Please fill out the username.");
      return;
    }
  
    alert("Form submitted successfully!");
    setIsModalOpen(false);
    setFormData({ username: "", email: "", phone: "", dob: "" });
  };
  

  return (
    <div className="app">
      {/* Main content with button to open modal */}
      {!isModalOpen && (
        <div className="main-content">
          <h1>User Details Modal</h1>
          <button onClick={handleOpenModal}>Open Form</button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <h2>Fill Details</h2>
            <form>
              {/* Username Field */}
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />

              {/* Email Field */}
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                 required
              />

              {/* Phone Field */}
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />

              {/* Date of Birth Field */}
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />

              {/* Submit Button */}
              <button
                type="submit"
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
