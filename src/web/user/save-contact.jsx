import React from 'react';
import '../styles/save-contact.css';

export default function SaveContact() {

  const handleSaveContact = () => {
    // Define the vCard data
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Shabir Ahmed Isa
EMAIL:shabirhassani1@gmail.com
TEL:36499889
ORG:Flick Technologies
TITLE:Founder & CEO
URL:http://www.dummy.com
END:VCARD
    `;

    // Create a blob from the vCard data
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);

    // Create a link element
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contact.vcf';

    // Append the link to the body
    document.body.appendChild(a);

    // Programmatically click the link to trigger the download
    a.click();

    // Clean up by removing the link
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1>Save Contact</h1>
      <button className="save-contact-button" onClick={handleSaveContact}>Save Contact</button>
    </div>
  );
}
