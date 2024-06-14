
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SaveContact() {
  const navigate = useNavigate();

  const handleSaveContact = () => {
    const contactData = {
      "name": "Shabir Ahmed Isa",
      "email": "shabirhassani1@gmail.com",
      "phone": "36499889",
      "organization": "Flick Technologies",
      "profession": "Founder & CEO",
      "website": "httjkasfhfaj" // assuming UserID is defined
    };

   
    window.location.href = `tel:new`;
  };

  return (
    <div>
      <h1>Save Contact</h1>
      <button className="save-contact-button" onClick={handleSaveContact}>Save Contact</button>
    </div>
  );
}
