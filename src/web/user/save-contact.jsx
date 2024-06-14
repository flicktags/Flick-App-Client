
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

    // if (navigator.contacts) {
    //   navigator.contacts.add(contactData);
    // } else {
    //   // fallback for devices that don't support navigator.contacts
    //   const url = `tel://?name=${contactData.name}&email=${contactData.email}&phone=${contactData.phone}&organization=${contactData.organization}&profession=${contactData.profession}&website=${contactData.website}`;
    //   navigate(url);
    // }
    window.location.href = `tel:9230308888`;
  };

  return (
    <div>
      <h1>Save Contact</h1>
      <button className="save-contact-button" onClick={handleSaveContact}>Save Contact</button>
    </div>
  );
}
