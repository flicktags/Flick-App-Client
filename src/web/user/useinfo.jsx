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
import axios from "axios";
import userimg from "../assets/user1.png";
import banerImage from "../assets/userEmptyBanner.png";
import SocialMediaContact from "./socialmediacontacts";
import { fetchData } from "../../services/issharebycategorey";
import { saveDataTodefault } from "../../services/issharebycategorey";
import { GridLoader } from "react-spinners";
import SaveContact from "./save-contact";
import "../styles/userinfoview.css";
const UserInfo = () => {
  const [isArabic, setIsArabic] = useState(
    localStorage.getItem("language") === "ar"
  );
  const [userData, setUserData] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [value, setValue] = useState(true);

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

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `https://flickapp.vercel.app/user/${window.location.pathname.slice(1)}`
      );
      const data = await response.json();

      setUserData(data.data);
      if (data.data.isSHareByCatgOn == true) {
        saveDataTodefault({ userid, value: false });
        // fetchCategoryData();
        fetchDataWithDelay();
      }
    } catch (error) {
      // console.error("Error fetching user details:", error);
    }
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
      // <div>
      //       <div className='userbannerContainer'>
      //         <img src={userData?.userBannerImage || userimg} alt='' className='userbannerimage' title='Click to view full image' />
      //       </div>
      //   <div className='overlay'>
      //     <div className='modal'>
      //       <div className='userimgcontainer'>
      //         <img src={userData?.userImage || userimg} alt='' className='userimg' title='Click to view full image' />
      //       </div>
      //       <div className='usrdta'>

      //         <h1>{userData?.name}</h1>
      //         <p className='profession'>{userData?.profession}</p>
      //         <p>{userData?.organization}</p>
      //       </div>
      //     </div>
      //   </div>
      //   <div>
      //     <div>
      //       <div>
      //         {userData?.socialMedia
      // .filter((socialMedia) => socialMedia.category == 'Business' && socialMedia.isActive == true)
      //           .map((socialMedia) => (
      //             <SocialMediaContact
      //               key={socialMedia._id}
      //               socialMediaType={socialMedia.socialMediaType}
      //               socialMediaName={socialMedia.socialMediaName}
      //               socialMedialink={socialMedia.socialMediaLink}
      //               userDirectMode={userData.directMode}
      //               userPdf={socialMedia?.userPdf}
      //               socialMediaDirectMode={socialMedia.socialMediaDirectMode}
      //               cat={socialMedia.category}
      //             />
      //           ))}
      //       </div>
      //     </div>
      //   </div>
      // </div>
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

  if (userData?.isSHareByCatgOn == false) {
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
      </div>
    );
  }
};

export default UserInfo;
