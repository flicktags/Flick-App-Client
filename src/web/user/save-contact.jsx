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

  const handleAndroidSaveContact = () => {
    const intentUri = `intent://contacts?action=add&name=Shabir Ahmed Isa&email=shabirhassani1@gmail.com&phone=36499889&company=Flick Technologies&job=Founder & CEO#Intent;scheme=mailto;end`;
    window.location.href = intentUri;
  };

  const handleIOSSaveContact = () => {
    handleSaveContact(); // Using vCard method
  };

  const handleSaveContactButton = () => {
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isAndroid) {
      handleAndroidSaveContact();
    } else if (isIOS) {
      handleIOSSaveContact();
    } else {
      alert('This function is only available on mobile devices.');
    }
  };

  return (
    <div>
      <h1>Save Contact</h1>
      <button className="save-contact-button" onClick={handleSaveContactButton}>Save Contact</button>
    </div>
  );
}
