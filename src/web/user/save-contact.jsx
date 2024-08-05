import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/save-contact.css';
import newUserImage from '../assets/new-user.png';
import ShareContactModal from './share-contact';

export default function SaveContact(userData) {
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();
   console.log(userData?.userData?.subscriptionType);
  useEffect(() => {
    // Fetch user id from localStorage
    const userIdFromStorage = localStorage.getItem('userid');
    setUserId(userIdFromStorage);
  }, []);

  const contact = {
    firstName: userData?.userData?.name,
    lastName: " ",
    phoneNumber: userData?.userData?.phone,
    email: userData?.userData?.email,
    organization: userData?.userData?.organization,
    website: `https://www.flicktagsonline.com/${userId}`,
    company: userData?.userData?.organization ,
    title: userData?.userData?.profession,
    
  };



  function jsonToVCard(contact) {

    return `
BEGIN:VCARD
VERSION:3.0
FN:${contact.firstName} ${contact.lastName}
N:${contact.lastName};${contact.firstName};;;
TEL;TYPE=CELL:${contact.phoneNumber}
EMAIL:${contact.email}
ORG:${contact.organization}
URL:${contact.website}
TITLE:${contact.title}
ORG:${contact.company}
ROLE:${contact.profession}  
END:VCARD
    `.trim();
  }

  function downloadVCard(contact) {
    const vCardData = jsonToVCard(contact);
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${contact.firstName}_${contact.lastName}.vcf`;
    a.click();

    URL.revokeObjectURL(url);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveContact = () => {
    downloadVCard(contact);
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
        {userData?.userData?.subscriptionType === 'pro' && (
         
            <button className="image-container" onClick={handleShareContact}>
              {/* <img src={newUserImage} className="share-contact-image" alt="User" /> */}
              Excahge Contact
            </button>
         
        )}
      </div>
     
        <ShareContactModal isOpen={isModalOpen} onClose={handleCloseModal} userName={userData?.userData?.name}/>
    
    </div>
  );
}
