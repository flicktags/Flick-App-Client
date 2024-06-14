import React from 'react';
import '../styles/save-contact.css';

export default function SaveContact() {

  const handleSaveContact = () => {
    window.open('/save-contact-form?name=Shabir+Ahmed+Isa&email=shabirhassani1@gmail.com&phone=36499889&organization=Flick+Technologies&profession=Founder+%26+CEO&website=flickURL%2BUserID'); // URL encoded dummy data
  };

  return (
    <div>
      <h1>Save Contact</h1>
      <button className="save-contact-button" onClick={handleSaveContact}>Save Contact</button>
    </div>
  );
}
