import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/save-contact.css';
import newUserImage from '../assets/new-user.png';
import ShareContactModal from './share-contact';

export default function SaveContact() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveContact = () => {
    const contactData = {
      name: 'John Doe', // Replace with actual data
      tel: '+1234567890', // Replace with actual data
      email: 'johndoe@example.com', // Replace with actual data (optional)
    };

    const vcard = new vCard();
    vcard.addName(contactData.name);
    vcard.addTel(contactData.tel);
    vcard.addEmail(contactData.email); // Add email if needed

    const blob = new Blob([vcard.toString()], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);

    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'contact.vcf';
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);

    downloadLink.click();
    document.body.removeChild(downloadLink);
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
