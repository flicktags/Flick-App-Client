import React, { useState } from "react";
import "../styles/share-contact-modal.css";
import { saveShareContact } from "../../services/user-conntact-sharinng";
import padlockIcon from "../assets/icons/padlock.png";
import "../styles/loadingAnimation.css"; // Add CSS for the loader



const ShareContactModal = ({ isOpen, onClose, userName }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    jobTitle: "",
    company: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false); // State for loading animation

  const handleClose = () => {
    setFormData({
      email: "",
      name: "",
      phone: "",
      jobTitle: "",
      company: "",
      notes: "",
    });
    setLoading(false);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading animation

    const userId = localStorage.getItem("userid");
    if (userId) {
      const dataWithUserid = { ...formData, userId };
      try {

        const response = await saveShareContact(dataWithUserid);

        if (response.message === "Information Save Success") {
          alert(`Contact Shared with ${userName} successfully`);
          // setSuccessMessage(true); // Show success message
          setLoading(false);

        } else {
          alert("Network Error");
          setLoading(false);

        }
      } catch (error) {
        // console.error("Error saving contact:", error);
        alert("Network Error");
      }
    } else {
      alert("User ID not found in local storage.");
      setLoading(false);

    }
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <>
    {loading && (
      <div className="loading-overlay">
        <div className="loader-container">
          <div className="animate">Encrypting and Sharing...</div>
        </div>
      </div>
    )}
    <div className="modal-overlay">
      <div className="modal-content">
      
        <div className="modal-header">
          Share Information with{" "}
          <span className="dynamic-text"> {userName}</span>
        </div>

        <div className="encryption-notice">
          <div className="encryption-header">
            <img src={padlockIcon} alt="Lock Icon" className="lock-icon" />
            End-to-End Encrypted
          </div>
          <div className="encryption-description">
            All your shared data are secured by End-to-End Encryption.
          </div>
        </div>
        
        <form className="modal-body" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone No"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
          />
          <input
            type="text"
            name="notes"
            placeholder="Notes on this interaction"
            value={formData.notes}
            onChange={handleChange}
          />
          <div className="modal-footer">
          <button type="button" onClick={handleClose}>
          Close
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>

      </div>
    </div>
    </>
  );
};


export default ShareContactModal;
