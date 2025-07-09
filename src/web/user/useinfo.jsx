// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import userimg from '../assets/user1.png';
// import SocialMediaContact from './socialmediacontacts';
// import { fetchData } from '../../services/issharebycategorey';
// import { saveDataTodefault } from '../../services/issharebycategorey';
// import { GridLoader } from 'react-spinners';
// import SaveContact from './save-contact';
// const UserInfo = () => {
//   const [userData, setUserData] = useState(null);
//   const [fetchedData, setFetchedData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [cancel, setCancel] = useState(false);
//   const [value, setValue] = useState(true);
//   const tokens = userData?.deviceToken;
//   localStorage.setItem('tokens', JSON.stringify(tokens));
//   const userid = window.location.pathname.slice(1);
//   localStorage.setItem('userid', userid);
//   useEffect(() => {
//     if (!userid) {
//       alert('User ID is empty');
//       return;
//     }

//       fetchUserData();

//     // saveDataTodefault({ userid, value:false });
//     // fetchDataWithDelay();
//   }, []);
//   const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
//   const fetchDataWithDelay = async () => {
//     await delay(1000);
//     fetchCategoryData();
//   };

//   const fetchUserData = async () => {

//     try {
//       const response = await fetch(`https://flickapp.vercel.app/user/${window.location.pathname.slice(1)}`);
//       const data = await response.json();

//       setUserData(data.data);
//       if (data.data.isSHareByCatgOn == true) {
//         // If user is shareable by category, start fetching category data

//     saveDataTodefault({ userid, value:false });
//         // fetchCategoryData();
//         fetchDataWithDelay();
//       }
//     } catch (error) {
//       console.error('Error fetching user details:', error);

//     }
//   };

//   const fetchCategoryData = async () => {
//     let newData = null;
//     let timer;
//     const timers = setTimeout(() => {
//       sendNotificationToUser(userData?.deviceToken);

//     }, 1000);
//     const handleTimeout = () => {

//       if (newData?.selectedCatgBtnOptionValue === 'default') {
//         const value = true;
//         saveDataTodefault({ userid, value });
//         setCancel(true);
//       }

//     };

//     const startTimer = () => {
//       timer = setTimeout(handleTimeout, 60000);
//     };

//     const stopTimer = () => {
//       clearTimeout(timer);
//     };

//     setLoading(true);

//     try {
//       startTimer();
//       while (!newData || newData?.selectedCatgBtnOptionValue === 'default') {
//         newData = await fetchData(userid);
//         setFetchedData(newData);
//         await new Promise(resolve => setTimeout(resolve, 6000));
//       }
//     } catch (error) {
//       console.error('Error fetching category data:', error);
//     } finally {
//       stopTimer();
//       setLoading(false);
//     }
//   };
//   if (cancel == true) {
//     return (< div className='auto_cancel'>
//       <h1>Apologies</h1>
//       <p className='cancel_data'>We regret to inform you that the user is currently unable to respond.</p>
//       <p className='cancel_data'>Please try again later.</p>
//     </div>);
//   }

//   if (fetchedData?.selectedCatgBtnOptionValue == 'default') {
//     return (
//       <div className='spinner'>
//         <GridLoader color={'#aeb5cf'} loading={loading} size={30} />
//         <h1>Please Wait For User </h1>
//         <h1>Response</h1>
//       </div>
//     );
//   }
//   if (fetchedData?.selectedCatgBtnOptionValue == 'canceled') {
//     return (
//       <div class="canceltext-container">
//         <div class="canceltext">
//           <h1>Your request has been canceled by the user. Please try again</h1>
//         </div>
//       </div>
//     );
//   }
//   if (fetchedData?.selectedCatgBtnOptionValue === 'Business' || fetchedData?.selectedCatgBtnOptionValue === 'business') {

//     return (
//       <div>
//         <div className='overlay'>
//           <div className='modal'>
//             <div className='userimgcontainer'>
//               <img src={userData?.userImage || userimg} alt='' className='userimg' title='Click to view full image' />
//             </div>
//             <div className='usrdta'>

//               <h1>{userData?.name}</h1>
//               <p className='profession'>{userData?.profession}</p>
//               <p>{userData?.organization}</p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div>
//             <div>
//               {userData?.socialMedia
//                 .filter((socialMedia) => socialMedia.category == 'Business' && socialMedia.isActive == true)
//                 .map((socialMedia) => (
//                   <SocialMediaContact
//                     key={socialMedia._id}
//                     socialMediaType={socialMedia.socialMediaType}
//                     socialMediaName={socialMedia.socialMediaName}
//                     socialMedialink={socialMedia.socialMediaLink}
//                     userDirectMode={userData.directMode}
//                     userPdf={socialMedia?.userPdf}
//                     socialMediaDirectMode={socialMedia.socialMediaDirectMode}
//                     cat={socialMedia.category}
//                   />
//                 ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
//   if (fetchedData?.selectedCatgBtnOptionValue == 'public') {

//     return (
//       <div>
//         <div className='overlay'>
//           <div className='modal'>
//             <div className='userimgcontainer'>
//               <img src={userData?.userImage || userimg} alt='' className='userimg' title='Click to view full image' />
//             </div>
//             <div className='usrdta'>

//               <h1>{userData?.name}</h1>
//               <p className='profession'>{userData?.profession}</p>
//               <p>{userData?.organization}</p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div>
//             <div>
//               {userData?.socialMedia
//                 .filter((socialMedia) => socialMedia.category === 'Public' && socialMedia.isActive == true)
//                 .map((socialMedia) => (
//                   <SocialMediaContact
//                     key={socialMedia._id}
//                     socialMediaType={socialMedia.socialMediaType}
//                     socialMediaName={socialMedia.socialMediaName}
//                     socialMedialink={socialMedia.socialMediaLink}
//                     userPdf={socialMedia?.userPdf}
//                     userDirectMode={userData.directMode}
//                     socialMediaDirectMode={socialMedia.socialMediaDirectMode}
//                     cat={socialMedia.category}
//                   />
//                 ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
//   if (fetchedData?.selectedCatgBtnOptionValue == 'all') {
//     return (
//       <div>
//         <div className='overlay'>
//           <div className='modal'>
//             <div className='userimgcontainer'>
//               <img src={userData?.userImage || userimg} alt='' className='userimg' title='Click to view full image' />
//             </div>
//             <div className='usrdta'>

//               <h1>{userData?.name}</h1>
//               <p className='profession'>{userData?.profession}</p>
//               <p>{userData?.organization}</p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div>
//             <div>
//               {userData?.socialMedia
//                 .filter((socialMedia) => socialMedia)
//                 .map((socialMedia) => (
//                   <SocialMediaContact
//                     key={socialMedia._id}
//                     socialMediaType={socialMedia.socialMediaType}
//                     socialMediaName={socialMedia.socialMediaName}
//                     socialMedialink={socialMedia.socialMediaLink}
//                     userDirectMode={userData.directMode}
//                     userPdf={socialMedia?.userPdf}
//                     socialMediaDirectMode={socialMedia.socialMediaDirectMode}
//                     cat={socialMedia.category}
//                   />
//                 ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (userData && userData.isActive === true) {
//     setTimeout(() => {
//       alert('This account is private and cannot be viewed');
//     }, 500);
//     return null;
//   }
//   if (userData && userData.isEnabledLostMode === true) {
//     setTimeout(() => {
//       alert(userData.lostMassege);
//     }, 500);
//     return null;
//   }
//   async function sendNotificationToUser() {
//     try {
//       // Retrieve tokens from local storage
//       const storedTokens = localStorage.getItem('tokens');
//       const tokens = storedTokens ? JSON.parse(storedTokens) : [];

//       // Iterate over each device token
//       for (let i = 0; i < tokens.length; i++) {
//         const token = tokens[i];
//         // Make an HTTP request to FCM API for each token
//         const response = await axios.post('https://fcm.googleapis.com/fcm/send', {
//           to: token,
//           notification: {
//             title: "Your Flick Digital Card has been Tapped.",
//             body: "Kindly Choose a Category you want to share.",
//             sound: "default"
//           },
//         }, {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer AAAAtv0TDgY:APA91bHbsmbrbDpSXx2qDJauc2-EiZ-l1AwJAZw36b9A0m7BG_NccAguillBAc9J308ykeC66HlqIiXYesmo505oXQFeT7x1GnDDO6mZIdhunL7SlqnJG_lyLuQ25zHzX_rzrkgETb1o`,
//           },
//         });

//         console.log('Notification sent successfully to token:', token);
//         console.log('Response:', response.data);
//       }
//     } catch (error) {
//       console.error('Error sending notification:', error);
//     }
//   }

//   if (userData?.isSHareByCatgOn == false) {
//     return (

//       <div>
//         <div className='overlay'>
//           <div className='modal'>
//             <div className='userimgcontainer'>
//               <img src={userData?.userImage || userimg} alt='' className='userimg' title='Click to view full image' />
//             </div>
//             <div className='usrdta'>

//               <h1>{userData?.name}</h1>
//               <p className='profession'>{userData?.profession}</p>
//               <p>{userData?.organization}</p>
//             </div>
//             <div className='save-contact-section'>
//             <SaveContact userData={userData}/>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div>
//             <div>
//               {userData?.socialMedia
//                 .filter((socialMedia) => socialMedia.isActive)
//                 .map((socialMedia) => (
//                   <SocialMediaContact
//                     key={socialMedia._id}
//                     socialMediaType={socialMedia.socialMediaType}
//                     socialMediaName={socialMedia.socialMediaName}
//                     socialMedialink={socialMedia.socialMediaLink}
//                     userDirectMode={userData.directMode}
//                     userPDF={socialMedia?.userPdf}
//                     socialMediaDirectMode={socialMedia.socialMediaDirectMode}
//                     cat={socialMedia.category}

//                   />
//                 ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// };

// export default UserInfo;
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import banerImage from "../assets/userEmptyBanner.png";
import SocialMediaContact from "./socialmediacontacts";
import { fetchData } from "../../services/issharebycategorey";
import { saveDataTodefault } from "../../services/issharebycategorey";
import { GridLoader } from "react-spinners";
import SaveContact from "./save-contact";
import "../styles/userinfoview.css";
import { saveEncryptedFeedback } from "../../services/feedback-encryption"; // path may vary

const UserInfo = () => {
  const [isArabic, setIsArabic] = useState(
    localStorage.getItem("language") === "ar"
  );
  const { t } = useTranslation();

  const [userData, setUserData] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cancel, setCancel] = useState(false);
  // const [value, setValue] = useState(true);
  const [hasDownloaded, setHasDownloaded] = useState(false); // Add this state

  // for feedback

  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackStars, setFeedbackStars] = useState(0);
  const [feedbackSubmitting, setFeedbackSubmitting] = useState(false);

  useEffect(() => {
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.documentElement.lang = isArabic ? "ar" : "en";
  }, [isArabic]);

  // Listen for custom language change event
  useEffect(() => {
    const handleLanguageChange = () => {
      const lang = localStorage.getItem("language");
      setIsArabic(lang === "ar");
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () =>
      window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  const tokens = userData?.deviceToken;
  localStorage.setItem("tokens", JSON.stringify(tokens));
  const userid = window.location.pathname.slice(1);
  localStorage.setItem("userid", userid);

  useEffect(() => {
    // const userId = window.location.pathname.slice(1);
    if (!userid) {
      alert("User ID is empty");
      return;
    }

    fetchUserData();
  }, []);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const fetchDataWithDelay = async () => {
    await delay(1000);
    fetchCategoryData();
  };

  useEffect(() => {
    // Listen for language change in localStorage
    const onStorageChange = () => {
      const lang = localStorage.getItem("language");
      setIsArabic(lang === "ar");
    };

    window.addEventListener("storage", onStorageChange);

    return () => {
      window.removeEventListener("storage", onStorageChange);
    };
  }, []);

  // 🔹 NEW FUNCTION: Track profile view
  const trackProfileView = async (userIdToTrack) => {
    const apiUrl = `http://flickapp.vercel.app/user/track/profile-view/${userIdToTrack}`; // your real production API URL
    // console.log("Tracking API called:", apiUrl); // <-- For debugging URL

    try {
      await axios.post(apiUrl);
      // console.log("✅ Profile view tracked");
    } catch (error) {
      // console.error("❌ Error tracking profile view:", error);
    }
  };

  useEffect(() => {
    if (
      userData &&
      userData.isContactCardActivated === true &&
      !hasDownloaded
    ) {
      setHasDownloaded(true); // Set this immediately to prevent duplicate calls
      setTimeout(() => {
        const testContact = {
          firstName: userData.name,
          lastName: " ",
          phoneNumber: userData.phone || "",
          email: userData.email || "",
          organization: userData.organization || "",
          website: `https://www.flicktagsonline.com/${userid}`,
          company: userData.organization || "",
          title: userData.profession || "",
        };
        downloadVCard(testContact);
      }, 500);
    }
  }, [userData, hasDownloaded]);

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `https://flickapp.vercel.app/user/${window.location.pathname.slice(1)}`
      );
      const data = await response.json();
      setUserData(data.data);
      trackProfileView(userid); // <-- Call here once

      if (data.data.isSHareByCatgOn === true) {
        saveDataTodefault({ userid, value: false });
        fetchDataWithDelay();
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  // const fetchUserData = async () => {
  //   try {

  //     // const pathParts = window.location.pathname.split("/");
  //     // const userId = pathParts[1];
  //     // const isOfflineMode = pathParts[2] === "offline";

  //     // Add mode as query parameter instead of route change
  //     // const response = await fetch(
  //     //   `https://flickapp.vercel.app/user/${userId}${
  //     //     isOfflineMode ? "?mode=offline" : ""
  //     //   }`
  //     // );

  //      const response = await fetch(
  //         `https://flickapp.vercel.app/user/${window.location.pathname.slice(1)}`
  //       );
  //     const data = await response.json();

  //     setUserData(data.data);

  //     if (data.data.isSHareByCatgOn === true) {
  //       saveDataTodefault({ userid, value: false });
  //       // fetchCategoryData();
  //       fetchDataWithDelay();
  //     }
  //   } catch (error) {
  //     // console.error("Error fetching user details:", error);
  //   }
  // };

  const downloadVCard = (contact) => {
    if (hasDownloaded) return; // Prevent multiple downloads
    const vCardData = `BEGIN:VCARD
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
END:VCARD`.trim();

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${contact.firstName}_${contact.lastName}.vcf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const containerStyle = () => {
    if (userData?.profileBGImage) {
      return {
        backgroundImage: `url(${userData.profileBGImage})`,
        backgroundSize: "cover", // Optional: adjusts the size of the background image
        backgroundPosition: "center", // Optional: centers the image
      };
    } else if (userData?.mainProfileColorCode) {
      return { backgroundColor: userData.mainProfileColorCode };
    } else if (userData?.profileStartColor && userData?.profileEndColor) {
      return {
        background: `linear-gradient(${userData.profileStartColor}, ${userData.profileEndColor})`,
      };
    } else {
      return { backgroundColor: "white" };
    }
  };
  const textForGroundColor = () => {
    if (userData?.profileTextColor) {
      // console.log("Using profileTextColor:", userData.profileTextColor);
      return { color: userData.profileTextColor };
    } else {
      // console.log("Text color is not in the field");
      return { color: "black" };
    }
  };

  const colorWithOpacity = (color) => {
    const alpha = parseInt(color.slice(1, 3), 16) / 255;
    const hexColor = color.slice(3);
    return `rgba(${parseInt(hexColor.slice(0, 2), 16)}, ${parseInt(
      hexColor.slice(2, 4),
      16
    )}, ${parseInt(hexColor.slice(4, 6), 16)}, ${alpha})`;
  };

  const fetchCategoryData = async () => {
    let newData = null;
    let timer;
    const timers = setTimeout(() => {
      sendNotificationToUser(userData?.deviceToken);
    }, 1000);
    const handleTimeout = () => {
      if (newData?.selectedCatgBtnOptionValue === "default") {
        const value = true;
        saveDataTodefault({ userid, value });
        setCancel(true);
      }
    };

    const startTimer = () => {
      timer = setTimeout(handleTimeout, 60000);
    };

    const stopTimer = () => {
      clearTimeout(timer);
    };

    setLoading(true);

    try {
      startTimer();
      while (!newData || newData?.selectedCatgBtnOptionValue === "default") {
        newData = await fetchData(userid);
        setFetchedData(newData);
        await new Promise((resolve) => setTimeout(resolve, 6000));
      }
    } catch (error) {
      // console.error("Error fetching category data:", error);
    } finally {
      stopTimer();
      setLoading(false);
    }
  };
  if (cancel === true) {
    return (
      <div className="auto_cancel">
        <h1>Apologies</h1>
        <p className="cancel_data">
          We regret to inform you that the user is currently unable to respond.
        </p>
        <p className="cancel_data">Please try again later.</p>
      </div>
    );
  }

  if (fetchedData?.selectedCatgBtnOptionValue === "default") {
    return (
      <div className="spinner">
        <GridLoader color={"#aeb5cf"} loading={loading} size={30} />
        <h1>Please Wait For User </h1>
        <h1>Response</h1>
      </div>
    );
  }
  if (fetchedData?.selectedCatgBtnOptionValue === "canceled") {
    return (
      <div class="canceltext-container">
        <div class="canceltext">
          <h1>Your request has been cancelled by the user. Please try again</h1>
        </div>
      </div>
    );
  }
  if (
    fetchedData?.selectedCatgBtnOptionValue === "Business" ||
    fetchedData?.selectedCatgBtnOptionValue === "business"
  ) {
    return (
      <div className="container" style={containerStyle()}>
        <div className="top-section">
          <div className="userbannerContainer">
            <img
              src={userData?.userBannerImage || banerImage}
              alt=""
              className="userbannerimage"
              title="Click to view full image"
            />
          </div>
          <div class="userimgcontainer">
            <img
              src={userData?.userImage || banerImage}
              alt=""
              className="userimg"
              title="Click to view full image"
            />
          </div>

          <div className="overlay">
            <div className="modal">
              <div className="usrdta">
                <h1 className="uaername" style={textForGroundColor()}>
                  {isArabic && userData?.nameArabic
                    ? userData.nameArabic
                    : userData?.name}
                </h1>
                <p className="profession" style={textForGroundColor()}>
                  {isArabic &&
                  userData?.professionArabic &&
                  userData.professionArabic !== "null"
                    ? userData.professionArabic
                    : userData?.profession}
                </p>
                <p className="organization" style={textForGroundColor()}>
                  {isArabic &&
                  userData?.organizationArabic &&
                  userData.organizationArabic !== "null"
                    ? userData.organizationArabic
                    : userData?.organization}
                </p>
              </div>
              <div className="save-contact-section">
                <SaveContact userData={userData} />
              </div>
              <div></div>
            </div>
          </div>
          {/* <div class="overlay">
            <div class="modal">
              <div class="usrdta">
                <h1 className="uaername" style={textForGroundColor()}>
                  {userData?.name}
                </h1>
                <p class="profession">{userData?.profession}</p>
                <p class="organization">{userData?.organization}</p>
              </div>
              <div class="save-contact-section">
                <SaveContact userData={userData} />
              </div>
              {}
              <div></div>
            </div>
          </div> */}
        </div>
        <div class="contactsoverly">
          {/* <div className="contactscontainer" style={contactContainerStyle()}> */}

          {userData?.socialMedia
            .filter(
              (socialMedia) =>
                socialMedia.category === "Business" &&
                socialMedia.isActive === true
            )
            .map((socialMedia) => (
              <SocialMediaContact
                key={socialMedia._id}
                socialMediaType={socialMedia.socialMediaType}
                socialMediaName={socialMedia.socialMediaName}
                socialMedialink={socialMedia.socialMediaLink}
                socialMediaCustomLogo={socialMedia.socialMediaCustomLogo}
                userDirectMode={userData.directMode}
                userPDF={socialMedia?.userPdf}
                socialMediaDirectMode={socialMedia.socialMediaDirectMode}
                cat={socialMedia.category}
              />
            ))}
          {/* </div> */}
        </div>

        <div className="poweredby">
          <h1 className="poweredbytext" style={textForGroundColor()}>
            {isArabic ? "مدعوم من" : "Powered by"}{" "}
            <a
              href="https://www.flicktags.com"
              className="flick-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flick
            </a>
          </h1>
        </div>
      </div>
    );
  }
  if (fetchedData?.selectedCatgBtnOptionValue === "public") {
    return (
      <div className="container" style={containerStyle()}>
        <div class="top-section">
          <div class="userbannerContainer">
            <img
              src={userData?.userBannerImage || banerImage}
              alt=""
              className="userbannerimage"
              title="Click to view full image"
            />
          </div>
          <div class="userimgcontainer">
            <img
              src={userData?.userImage || banerImage}
              alt=""
              className="userimg"
              title="Click to view full image"
            />
          </div>
          <div className="overlay">
            <div className="modal">
              <div className="usrdta">
                <h1 className="uaername" style={textForGroundColor()}>
                  {isArabic && userData?.nameArabic
                    ? userData.nameArabic
                    : userData?.name}
                </h1>
                <p className="profession" style={textForGroundColor()}>
                  {isArabic &&
                  userData?.professionArabic &&
                  userData.professionArabic !== "null"
                    ? userData.professionArabic
                    : userData?.profession}
                </p>
                <p className="organization" style={textForGroundColor()}>
                  {isArabic &&
                  userData?.organizationArabic &&
                  userData.organizationArabic !== "null"
                    ? userData.organizationArabic
                    : userData?.organization}
                </p>
              </div>
              <div className="save-contact-section">
                <SaveContact userData={userData} />
              </div>
              <div></div>
            </div>
          </div>

          {/* <div class="overlay">
            <div class="modal">
              <div class="usrdta">
                <h1 class="uaername">{userData?.name}</h1>
                <p class="profession">{userData?.profession}</p>
                <p class="organization">{userData?.organization}</p>
              </div>
              <div class="save-contact-section">
                <SaveContact userData={userData} />
              </div>
              <div></div>
            </div>
          </div> */}
        </div>
        <div className="contactsoverly">
          {/* <div className="contactscontainer" style={contactContainerStyle()}> */}
          {userData?.socialMedia
            .filter(
              (socialMedia) =>
                socialMedia.category === "Public" &&
                socialMedia.isActive === true
            )
            .map((socialMedia) => (
              <SocialMediaContact
                key={socialMedia._id}
                socialMediaType={socialMedia.socialMediaType}
                socialMediaName={socialMedia.socialMediaName}
                socialMedialink={socialMedia.socialMediaLink}
                socialMediaCustomLogo={socialMedia.socialMediaCustomLogo}
                userDirectMode={userData.directMode}
                userPDF={socialMedia?.userPdf}
                socialMediaDirectMode={socialMedia.socialMediaDirectMode}
                cat={socialMedia.category}
              />
            ))}
          {/* </div> */}
        </div>
        <div className="poweredby">
          <h1 className="poweredbytext" style={textForGroundColor()}>
            {isArabic ? "مدعوم من" : "Powered by"}{" "}
            <a
              href="https://www.flicktags.com"
              className="flick-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flick
            </a>
          </h1>
        </div>
      </div>
    );
  }

  const handleSubmitFeedback = async () => {
  setFeedbackSubmitting(true);

  try {
    const userId = localStorage.getItem("userid");
    const response = await saveEncryptedFeedback({
      userId,
      name: feedbackName,
      feedback: feedbackText,
      noofStars: feedbackStars,
    });

    if (response.message === "Feedback submitted successfully") {
      alert(t("feedbacksharedsuccessfully"));
    } else {
      alert(t("networkerror"));
    }
  } catch (error) {
    console.error("Error submitting feedback:", error);
    alert(t("networkerror"));
  } finally {
    setFeedbackSubmitting(false);
    setShowFeedbackModal(false);
    setFeedbackName("");
    setFeedbackText("");
    setFeedbackStars(0);
  }
};

  // const handleSubmitFeedback = async () => {
  //   if (!feedbackText || !feedbackStars) {
  //     alert("Please fill in all required fields.");
  //     return;
  //   }

  //   try {
  //     setFeedbackSubmitting(true); // 🔁 Start spinner
  //     const userId = localStorage.getItem("userid");
  //     const response = await axios.post(
  //       `https://flickapp.vercel.app/user/submit-feedback/${userId}`,
  //       {
  //         name: feedbackName,
  //         feedback: feedbackText,
  //         noofStars: feedbackStars,
  //       }
  //     );

  //     // ✅ Optional: You can show success toast here
  //     alert("Feedback submitted successfully!");

  //     // Reset inputs
  //     setFeedbackName("");
  //     setFeedbackText("");
  //     setFeedbackStars(0);
  //     setShowFeedbackModal(false);
  //   } catch (error) {
  //     console.error("Error submitting feedback:", error);
  //     alert("Something went wrong. Please try again.");
  //   } finally {
  //     setFeedbackSubmitting(false); // 🔁 Stop spinner
  //   }
  // };


  if (fetchedData?.selectedCatgBtnOptionValue === "all") {
    return (
      <div className="container" style={containerStyle()}>
        <div class="top-section">
          <div class="userbannerContainer">
            <img
              src={userData?.userBannerImage || banerImage}
              alt=""
              className="userbannerimage"
              title="Click to view full image"
            />
          </div>
          <div class="userimgcontainer">
            <img
              src={userData?.userImage || banerImage}
              alt=""
              className="userimg"
              title="Click to view full image"
            />
          </div>
          <div className="overlay">
            <div className="modal">
              <div className="usrdta">
                <h1 className="uaername" style={textForGroundColor()}>
                  {isArabic && userData?.nameArabic
                    ? userData.nameArabic
                    : userData?.name}
                </h1>
                <p className="profession" style={textForGroundColor()}>
                  {isArabic &&
                  userData?.professionArabic &&
                  userData.professionArabic !== "null"
                    ? userData.professionArabic
                    : userData?.profession}
                </p>
                <p className="organization" style={textForGroundColor()}>
                  {isArabic &&
                  userData?.organizationArabic &&
                  userData.organizationArabic !== "null"
                    ? userData.organizationArabic
                    : userData?.organization}
                </p>
              </div>
              <div className="save-contact-section">
                <SaveContact userData={userData} />
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="contactsoverly">
          {/* <div className="contactscontainer" style={contactContainerStyle()}> */}

          {userData?.socialMedia
            .filter((socialMedia) => socialMedia.isActive)
            .map((socialMedia) => (
              <SocialMediaContact
                key={socialMedia._id}
                socialMediaType={socialMedia.socialMediaType}
                socialMediaName={socialMedia.socialMediaName}
                socialMedialink={socialMedia.socialMediaLink}
                socialMediaCustomLogo={socialMedia.socialMediaCustomLogo}
                userDirectMode={userData.directMode}
                userPDF={socialMedia?.userPdf}
                socialMediaDirectMode={socialMedia.socialMediaDirectMode}
                cat={socialMedia.category}
              />
            ))}
          {/* </div> */}
        </div>
        <div className="poweredby">
          <h1 className="poweredbytext" style={textForGroundColor()}>
            {isArabic ? "مدعوم من" : "Powered by"}{" "}
            <a
              href="https://www.flicktags.com"
              className="flick-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flick
            </a>
          </h1>
        </div>
      </div>
    );
  }

  if (userData && userData.isActive === true) {
    setTimeout(() => {
      alert("This account is private and cannot be viewed");
    }, 500);
    return null;
  }
  if (userData && userData.isEnabledLostMode === true) {
    setTimeout(() => {
      alert(userData.lostMassege);
    }, 500);
    return null;
  }
  if (userData && userData.isContactCardActivated === true) {
    setTimeout(() => {}, 500);
    return null;
  }

  async function sendNotificationToUser() {
    try {
      // Retrieve tokens from local storage
      const storedTokens = localStorage.getItem("tokens");
      const tokens = storedTokens ? JSON.parse(storedTokens) : [];

      // Iterate over each device token
      for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        // Make an HTTP request to FCM API for each token
        const response = await axios.post(
          "https://fcm.googleapis.com/fcm/send",
          {
            to: token,
            notification: {
              title: "Your Flick Digital Card has been Tapped.",
              body: "Kindly Choose a Category you want to share.",
              sound: "default",
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer AAAAtv0TDgY:APA91bHbsmbrbDpSXx2qDJauc2-EiZ-l1AwJAZw36b9A0m7BG_NccAguillBAc9J308ykeC66HlqIiXYesmo505oXQFeT7x1GnDDO6mZIdhunL7SlqnJG_lyLuQ25zHzX_rzrkgETb1o`,
            },
          }
        );

        // console.log("Notification sent successfully to token:", token);
        // console.log("Response:", response.data);
      }
    } catch (error) {
      // console.error("Error sending notification:", error);
    }
  }

  if (userData?.isSHareByCatgOn === false) {
    //   return (

    //     <div>
    //        <div className='userbannerContainer'>
    //             <img src={userData?.userBannerImage || userimg} alt='' className='userbannerimage' title='Click to view full image' />
    //           </div>
    //       <div className='overlay'>
    //         <div className='modal'>
    //           <div className='userimgcontainer'>
    //             <img src={userData?.userImage || userimg} alt='' className='userimg' title='Click to view full image' />
    //           </div>
    //           <div className='usrdta'>

    //             <h1 className='uaername'>{userData?.name}</h1>
    //             <p className='profession'>{userData?.profession}</p>
    //             <p className='organization'>{userData?.organization}</p>
    //           </div>
    //           <div className='save-contact-section'>
    //           <SaveContact userData={userData}/>
    //           </div>
    //           <div className='divider'></div>
    //         </div>
    //       </div>
    //       <div>
    //         <div>
    //           <div>
    //             {userData?.socialMedia
    //               .filter((socialMedia) => socialMedia.isActive)
    //               .map((socialMedia) => (
    //                 <SocialMediaContact
    //                   key={socialMedia._id}
    //                   socialMediaType={socialMedia.socialMediaType}
    //                   socialMediaName={socialMedia.socialMediaName}
    //                   socialMedialink={socialMedia.socialMediaLink}
    //                   userDirectMode={userData.directMode}
    //                   userPDF={socialMedia?.userPdf}
    //                   socialMediaDirectMode={socialMedia.socialMediaDirectMode}
    //                   cat={socialMedia.category}

    //                 />
    //               ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // } here is the code of SocialMediaContact return (
    //           <a
    //               target={socialMediaType === 'Resume' ? "_blank" : "_self"}
    //               rel={socialMediaType === 'Resume' ? "noopener noreferrer" : undefined}
    //               onClick={handleClick}
    //           >

    //               <div className='contactsoverly'>
    //                   <div className='contacstscontainer'>
    //                       <div>

    //                           <div className='socialMediaIcon'>
    //                               <img
    //                                   src={socialMediaIcons[socialMediaType]}
    //                                   alt={''}
    //                                   className='iconImage'
    //                               />
    //                               <p className="socialmedianame">{socialMediaName}</p>
    //                           </div>
    //                       </div>
    //                   </div>
    //               </div>
    //           </a>
    //       );
    return (
      <div className="container" style={containerStyle()}>
        <div class="top-section">
          <div class="userbannerContainer">
            <img
              src={userData?.userBannerImage || banerImage}
              alt=""
              className="userbannerimage"
              title="Click to view full image"
            />
          </div>
          <div class="userimgcontainer">
            <img
              src={userData?.userImage || banerImage}
              alt=""
              className="userimg"
              title="Click to view full image"
            />
          </div>
          <div className="overlay">
            <div className="modal">
              <div className="usrdta">
                <h1 className="uaername" style={textForGroundColor()}>
                  {isArabic && userData?.nameArabic
                    ? userData.nameArabic
                    : userData?.name}
                </h1>
                <p className="profession" style={textForGroundColor()}>
                  {isArabic &&
                  userData?.professionArabic &&
                  userData.professionArabic !== "null"
                    ? userData.professionArabic
                    : userData?.profession}
                </p>
                <p className="organization" style={textForGroundColor()}>
                  {isArabic &&
                  userData?.organizationArabic &&
                  userData.organizationArabic !== "null"
                    ? userData.organizationArabic
                    : userData?.organization}
                </p>
              </div>
              <div className="save-contact-section">
                <SaveContact userData={userData} />
              </div>
              <div></div>
            </div>
          </div>

          {/* <div class="overlay">
            <div class="modal">
              <div class="usrdta">
                <h1 className="uaername" style={textForGroundColor()}>
                  {userData?.name}
                </h1>
                <p class="profession" style={textForGroundColor()}>
                  {userData?.profession}
                </p>
                <p class="organization" style={textForGroundColor()}>
                  {userData?.organization}
                </p>
              </div>
              <div class="save-contact-section">
                <SaveContact userData={userData} />
              </div>
              <div></div>
            </div>
          </div> */}
        </div>
        <div className="contactsoverly">
          <div className="contactscontainer">
            {userData?.socialMedia
              .filter((socialMedia) => socialMedia.isActive)
              .map((socialMedia) => (
                <SocialMediaContact
                  key={socialMedia._id}
                  socialMediaType={socialMedia.socialMediaType}
                  // socialMediaName={socialMedia.socialMediaName}
                  socialMediaName={
                    isArabic && socialMedia.socialMediaNameArabic
                      ? socialMedia.socialMediaNameArabic
                      : socialMedia.socialMediaName
                  }
                  socialMedialink={socialMedia.socialMediaLink}
                  socialMediaCustomLogo={socialMedia.socialMediaCustomLogo}
                  userDirectMode={userData.directMode}
                  userPDF={socialMedia?.userPdf}
                  socialMediaDirectMode={socialMedia.socialMediaDirectMode}
                  cat={socialMedia.category}
                  containerBackgroundColor={
                    userData?.profileContainerColor
                      ? colorWithOpacity(userData.profileContainerColor)
                      : "white"
                  }
                  textColor={
                    userData?.profileTextColor
                      ? userData.profileTextColor
                      : "black"
                  } // ✅ Added textColor here
                />
              ))}
          </div>
        </div>
        <div className="poweredby">
          <h1 className="poweredbytext" style={textForGroundColor()}>
            {isArabic ? "مدعوم من" : "Powered by"}{" "}
            <a
              href="https://www.flicktags.com"
              className="flick-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flick
            </a>
          </h1>
        </div>
        {/* 🔹 Floating Feedback Button */}
        {userData?.isFeedBackEnabled && (
          <div>
            <button
              style={{
                position: "fixed",
                bottom: "20px",
                ...(isArabic ? { left: "20px" } : { right: "20px" }), // ✅ Dynamically position
                backgroundColor: userData?.ColorCode || "#ff6600",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                fontSize: "24px",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                zIndex: 1000,
              }}
              onClick={() => setShowFeedbackModal(true)}
              title={t("sharefeedback")}
            >
              💬
            </button>
          </div>
        )}
        {/* 🔹 Feedback Modal */}
        {showFeedbackModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1001,
            }}
            onClick={() => setShowFeedbackModal(false)} // close on backdrop click
          >
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                width: "90%",
                maxWidth: "400px",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()} // prevent modal close on inner click
            >
              <h2 style={{ textAlign: "center" }}>{t("sharefeedback")}</h2>

              {/* 🔹 Name Input */}
              <div style={{ padding: "0 10px" }}>
                {/* 🔹 Name Input */}
                <input
                  type="text"
                  placeholder={t("optionalname")}
                  value={feedbackName}
                  onChange={(e) => setFeedbackName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "10px",
                    fontFamily: isArabic ? "noto-kufi" : "caros-light",
                  }}
                />

                {/* 🔹 Feedback Textarea */}
                <textarea
                  placeholder={t("yourfeedback")}
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "10px",
                    minHeight: "80px",
                    fontFamily: isArabic ? "noto-kufi" : "caros-light",
                  }}
                />
              </div>

              {/* 🔹 Star Rating */}
              <div style={{ marginBottom: "5px", textAlign: "center" }}>
                {/* <label style={{ display: "block", marginBottom: "6px" }}>
                  Rating:
                </label> */}
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    justifyContent: "center", // ✅ Center stars horizontally

                    fontSize: "24px",
                    cursor: "pointer",
                  }}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => setFeedbackStars(star)}
                      style={{
                        color: star <= feedbackStars ? "#FFA500" : "#ccc",
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                {feedbackStars > 0 && (
                  <p
                    style={{
                      marginTop: "6px",
                      fontSize: "14px",
                      color: "#444",
                    }}
                  >
                    {/* You selected {feedbackStars} star
                    {feedbackStars > 1 ? "s" : ""} */}
                  </p>
                )}
              </div>
              <button
                onClick={handleSubmitFeedback}
                style={{
                  backgroundColor: userData?.ColorCode || "#ff6600",
                  color: "white",
                  border: "none",
                  padding: "10px",
                  width: "100%",
                  borderRadius: "6px",
                  cursor: feedbackSubmitting ? "not-allowed" : "pointer",
                  position: "relative",
                  height: "45px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: feedbackSubmitting ? 0.7 : 1,
                  fontFamily: isArabic ? "noto-kufi" : "caros-light",
                }}
                disabled={feedbackSubmitting}
              >
                {feedbackSubmitting ? (
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      border: "3px solid white",
                      borderTop: "3px solid transparent",
                      borderRadius: "50%",
                      animation: "spin 1s linear infinite",
                      fontFamily: isArabic ? "noto-kufi" : "caros-light",
                    }}
                  ></div>
                ) : (
                  t("sendfeedback")
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default UserInfo;
