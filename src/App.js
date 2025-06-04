// import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import NavBar from './web/navbar/index';
// import UserInfo from './web/user/useinfo';

// function App() {
  
//   return (
//     <div >
      
//         {/* <NavBar/> */}
//         <UserInfo/>
      
//     </div>
//   );
// }

// export default App;

// this is working code..
// import './i18n'; 
// import React, { useEffect, useState } from "react";
// import "./App.css";
// import './fonts/fonts.css';
// import UserInfo from "./web/user/useinfo";
// import { useTranslation } from 'react-i18next';
// import LanguageSwitcher from './components/LanguageSwitcher';
// function App() {
//   const { i18n } = useTranslation();
//   const [direction, setDirection] = useState('ltr');
//   const [fontFamily, setFontFamily] = useState("'Roboto', sans-serif");

  
//   useEffect(() => {
//     // ✅ If no language is stored yet, default to English
//     const storedLang = localStorage.getItem("language");
//     if (!storedLang) {
//       localStorage.setItem("language", "en");
//     }

//     // ✅ Sync i18n with localStorage on initial load
//     if (storedLang && storedLang !== i18n.language) {
//       i18n.changeLanguage(storedLang);
//     }

//     const updateDirection = (lang) => {
//       const dir = lang === "ar" ? "rtl" : "ltr";
//       // const font = lang === "ar" ? "'Tajawal', sans-serif" : "'Roboto', sans-serif";
//       const font = lang === "ar" ? "'NotoKufi'" : "'CarosMedium'";


//       setDirection(dir);
//       setFontFamily(font);

//       document.documentElement.dir = dir;
//       document.documentElement.lang = lang;
//       document.documentElement.style.fontFamily = font;
//     };

//     // Initial call
//     updateDirection(i18n.language);

//     // ✅ Listen to languageChange events and sync direction/font
//     const handleLangChange = () => {
//       const newLang = localStorage.getItem("language") || "en";
//       i18n.changeLanguage(newLang);
//       updateDirection(newLang);
//     };

//     window.addEventListener("languageChange", handleLangChange);
//     return () => {
//       window.removeEventListener("languageChange", handleLangChange);
//     };
//   }, [i18n]);

//   return (
//     <div style={{ direction, fontFamily, position: 'relative', minHeight: '100vh' }}>
//     <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1000 }}>
//       <LanguageSwitcher />
//     </div>
//     <UserInfo />
//   </div>
//   );
// }

// export default App;

// function App() {
//   useEffect(() => {
//   }, []);
//   return (
//     <div>
//       {/* <NavBar /> */}
//       <UserInfo />
//     </div>
//   );
// }

// export default App;



import './i18n'; 
import React, { useEffect, useState } from "react";
import "./App.css";
import './fonts/fonts.css';
import UserInfo from "./web/user/useinfo";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { i18n } = useTranslation();
  const [direction, setDirection] = useState('ltr');
  const [fontFamily, setFontFamily] = useState("'Roboto', sans-serif");
  const [multiLangActivated, setMultiLangActivated] = useState(false); // 👈 Track this
  const [userDataLoaded, setUserDataLoaded] = useState(false);

  // ✅ Fetch user data to check for MultiLangActivated
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = window.location.pathname.slice(1);
        const response = await fetch(`https://flickapp.vercel.app/user/${userId}`);
        const data = await response.json();
        const user = data.data;

        setMultiLangActivated(user.isMultiLangActivated === true); // 👈 Set flag
        setUserDataLoaded(true);
      } catch (error) {
      }
    };

    fetchUserData();
  }, []);

  // ✅ Language, direction, and font sync
  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (!storedLang) {
      localStorage.setItem("language", "en");
    }

    if (storedLang && storedLang !== i18n.language) {
      i18n.changeLanguage(storedLang);
    }

    const updateDirection = (lang) => {
      const dir = lang === "ar" ? "rtl" : "ltr";
      const font = lang === "ar" ? "'NotoKufi'" : "'CarosMedium'";
      setDirection(dir);
      setFontFamily(font);
      document.documentElement.dir = dir;
      document.documentElement.lang = lang;
      document.documentElement.style.fontFamily = font;
    };

    updateDirection(i18n.language);

    const handleLangChange = () => {
      const newLang = localStorage.getItem("language") || "en";
      i18n.changeLanguage(newLang);
      updateDirection(newLang);
    };

    window.addEventListener("languageChange", handleLangChange);
    return () => {
      window.removeEventListener("languageChange", handleLangChange);
    };
  }, [i18n]);

  return (
    <div style={{ direction, fontFamily, position: 'relative', minHeight: '100vh' }}>
      {userDataLoaded && multiLangActivated && (
        <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1000 }}>
          <LanguageSwitcher />
        </div>
      )}
      <UserInfo />
    </div>
  );
}

export default App;
