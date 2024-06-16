import { AiFillAlert } from "react-icons/ai";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/save-contact.css';

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
const handleShareContact=()=>{
alert('Share Contact')
};
  return (
    <div className="main-container">
      <div className="content-row">
        <button className="save-contact-button" onClick={handleSaveContact}>Save Contact</button>
        <div className="image-container">
        <button className="image-button" onClick={handleShareContact}>
          <img src={require('../assets/new-user.png')} className="share-contact-image" alt="User"/>
        </button>
        </div>
      </div>
    </div>
  );
}
