// import React from 'react';
// import { changeLanguage } from '../i18n';

// const LanguageSwitcher = () => {
//   const handleChange = (e) => {
//     const selectedLang = e.target.value;
//     changeLanguage(selectedLang);
//   };

//   return (
//     <div style={{ marginBottom: '20px', textAlign: 'right', padding: '10px' }}>
//       <select onChange={handleChange} defaultValue="en">
//         <option value="en">English</option>
//         <option value="ar">العربية</option>
//       </select>
//     </div>
//   );
// };

// export default LanguageSwitcher;
import React, { useState, useEffect, useRef } from 'react';
import { changeLanguage } from '../i18n';
import ukFlag from '../web/assets/flags/uk.png';
import bhFlag from '../web/assets/flags/bahrain.png';

const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(localStorage.getItem("language") || "en");
    const dropdownRef = useRef(null);
  
    const flagMap = {
      en: ukFlag,
      ar: bhFlag,
    };
  
    const handleLanguageChange = (lang) => {
      changeLanguage(lang);
      localStorage.setItem("language", lang);
      setCurrentLang(lang);
      setIsOpen(false);
      window.dispatchEvent(new Event("languageChange"));
    };
  
    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  
    return (
      <div ref={dropdownRef} style={{ position: 'relative', textAlign: 'right', padding: '10px' }}>
        {/* Current Language Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '5px 10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <img src={flagMap[currentLang]} alt="Language" style={{ width: '25px', height: '17px' }} />
          <span style={{ fontSize: '14px' }}>{currentLang === 'en' ? 'EN' : 'AR'}</span>
        </button>
  
        {/* Dropdown */}
        {isOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            background: '#fff',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginTop: '5px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            zIndex: 1000
          }}>
            <div
              onClick={() => handleLanguageChange('en')}
              style={{
                padding: '5px 10px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer'
              }}
            >
              <img src={ukFlag} alt="English" style={{ width: '25px', height: '17px' }} />
              <span>English</span>
            </div>
            <div
              onClick={() => handleLanguageChange('ar')}
              style={{
                padding: '5px 10px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer'
              }}
            >
              <img src={bhFlag} alt="Arabic" style={{ width: '25px', height: '17px' }} />
              <span>العربية</span>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default LanguageSwitcher;

// const LanguageSwitcher = () => {
//   const handleChange = (e) => {
//     const selectedLang = e.target.value;

//     // Update language in i18n
//     changeLanguage(selectedLang);

//     // ✅ Update localStorage so other components know
//     localStorage.setItem("language", selectedLang);

//     // ✅ Dispatch event so components like UserInfo can update state
//     window.dispatchEvent(new Event("languageChange"));
//   };

//   return (
//     <div style={{ marginBottom: '20px', textAlign: 'right', padding: '10px' }}>
//       <select onChange={handleChange} value={localStorage.getItem("language") || "en"}>
//         <option value="en">English</option>
//         <option value="ar">العربية</option>
//       </select>
//     </div>
//   );
// };

// export default LanguageSwitcher;