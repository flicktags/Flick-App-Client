import React from 'react';
import '../styles/save-contact.css';

const dummyData = `
NAME: Shabir Ahmed Isa
EMAIL: shabirhassani1@gmail.com
PHONE: 36499889
ORGANIZATION: Flick Technologies
PROFESSION: Founder & CEO
WEBSITE:www.google.com
`; // Format contact information

export default function SaveContact() {

  const handleSaveContact = () => {
    navigator.clipboard.writeText(dummyData)
      .then(() => {
        alert('Contact information copied! Please paste it into your Contacts app.');
      })
      .catch(err => {
        console.error('Failed to copy contact information:', err);
        alert('Failed to copy contact information. Please try again.');
      });
  };

  return (
    <div>
    
      <button className="save-contact-button" onClick={handleSaveContact}>Save Contact</button>
    </div>
  );
}
