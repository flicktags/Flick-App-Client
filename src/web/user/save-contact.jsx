import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/save-contact.css';
import newUserImage from '../assets/new-user.png';
import ShareContactModal from './share-contact';

export default function SaveContact() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveContact = () => {
    window.location.href = 'tel:new?name=John+Doe&phone=+1234567890';
  };

  const handleShareContact = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="main-container">
      <div className="content-row">
        <button className="save-contact-button" onClick={handleSaveContact}>Save Contact</button>
        <div className="image-container">
          <button className="image-button" onClick={handleShareContact}>
            <img src={newUserImage} className="share-contact-image" alt="User" />
          </button>
        </div>
      </div>
      <ShareContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
