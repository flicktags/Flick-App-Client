import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/save-contact.css';
import newUserImage from '../assets/new-user.png';
import ShareContactModal from './share-contact';

export default function SaveContact(userData) {
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();
  //  console.log(userData?.userData?.subscriptionType);
  useEffect(() => {
    // Fetch user id from localStorage
    const userIdFromStorage = localStorage.getItem('userid');
    setUserId(userIdFromStorage);
  }, []);

  const backgroundColor = userData?.userData?.ColorCode || '#0a8db1'; // Default to black if colorCode is null

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
  const textForGroundColor = () => {
    if (userData?.userData?.profileTextColor) {
      // console.log("Using profileTextColor test:", userData.userData.profileTextColor);
      return userData.userData.profileTextColor; // Return only the color code
    } else {
      // console.log("Text color is not in the field");
      return "white"; // Default to white
    }
  };

  return (
    <div className="main-container">
      <div className="content-row">
        <button
          className="save-contact-button"
          onClick={handleSaveContact}
          style={{ backgroundColor, color: textForGroundColor() }} // Use only the color value
        >
          Save Contact
        </button>
  
        {userData?.userData?.subscriptionType === 'pro' && (
          <button
            className="image-container"
            onClick={handleShareContact}
            style={{ backgroundColor, color: textForGroundColor() }} // Apply textForGroundColor() here as well
          >
            Exchange Contact
          </button>
        )}
      </div>
  
      <ShareContactModal isOpen={isModalOpen} onClose={handleCloseModal} userName={userData?.userData?.name} />
    </div>
  );

  // return (
  //   <div className="main-container">
  //     <div className="content-row">
  //       {/* <button className="save-contact-button" onClick={handleSaveContact}>Save Contact</button> */}
  //       <button
  //     className="save-contact-button"
  //     onClick={handleSaveContact}
  //     style={{ backgroundColor, color: textForGroundColor() }} // Set background color and text color
  //   >
  //     Save Contact
  //   </button>
  //       {userData?.userData?.subscriptionType === 'pro' && (
  //           <button className="image-container" onClick={handleShareContact} style={{ backgroundColor, color: 'white' }} >
  //             {/* <img src={newUserImage} className="share-contact-image" alt="User" /> */}
  //             Exchange Contact
  //           </button>
         
  //       )}
  //     </div>
     
  //       <ShareContactModal isOpen={isModalOpen} onClose={handleCloseModal} userName={userData?.userData?.name}/>
    
  //   </div>
  // );
}
