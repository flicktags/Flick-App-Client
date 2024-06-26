import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/save-contact.css';
import newUserImage from '../assets/new-user.png';
import ShareContactModal from './share-contact';

export default function SaveContact() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveContact = async () => {
    const contactDetails = {
      title: 'Contact',
      text: 'Name: John Doe\nPhone: +1234567890',
      url: ''
    };

    if (navigator.canShare && navigator.canShare(contactDetails)) {
      try {
        await navigator.share(contactDetails);
      } catch (error) {
        console.error('Error sharing contact', error);
      }
    } else {
      // Fallback for browsers that do not support the Web Share API
      alert('Web Share API is not supported in your browser. Please use the contact app manually.');
    }
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
