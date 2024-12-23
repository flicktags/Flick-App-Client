import React, { useState } from 'react';
import '../styles/share-contact-modal.css';
import { saveShareContact } from '../../services/user-conntact-sharinng';
const ShareContactModal = ({ isOpen, onClose,userName }) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    jobTitle: '',
    company: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const userId = localStorage.getItem('userid');
    if (userId) {
      const dataWithUserid = { ...formData, userId };
      try {
        const response = await saveShareContact(dataWithUserid);
        if (response.message === "Information Save Success") {
          alert('Contact saved');
        } else {
          alert("Network Error");
        }
      } catch (error) {
        console.error("Error saving contact:", error);
        alert("Network Error");
      }
    } else {
      alert('User ID not found in local storage.');
    }
  
    onClose();
  };
  

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">Share Information with {userName} </div>
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
            <button type="button" onClick={onClose}>Close</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShareContactModal;
