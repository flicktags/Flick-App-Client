// import React, { useState,useEffect } from "react";
// import '../styles/userinfoview.css';
// import icon from '../assets/icons/facebook.png';
// import icon2 from '../assets/icons/youtube.png';
// import icon3 from '../assets/icons/yelp.png';
// import icon4 from '../assets/icons/X.png';
// import icon5 from '../assets/icons/whatsapp.png';
// import icon6 from '../assets/icons/wechat.png';
// import icon7 from '../assets/icons/website.png';
// import icon8 from '../assets/icons/viber.png';
// import icon9 from '../assets/icons/twitterr.png';
// import icon10 from '../assets/icons/venmo.png';
// import icon11 from '../assets/icons/tumblr.png';
// import icon12 from '../assets/icons/tiktok.png';
// import icon13 from '../assets/icons/spotify.png';
// import icon14 from '../assets/icons/soundcloud.png';
// import icon15 from '../assets/icons/snapchat.png';
// import icon16 from '../assets/icons/linkedin.png';
// import icon17 from '../assets/icons/instagram.png';
// import icon18 from '../assets/icons/tripadvisor.png';
// import icon19 from '../assets/icons/soundcloud.png';
// import icon20 from '../assets/icons/reddit.png';
// import icon21 from '../assets/icons/phone.png';
// import icon22 from '../assets/icons/paypal.png';
// import icon23 from '../assets/icons/messengerr.png';
// import icon24 from '../assets/icons/messages.png';
// import icon25 from '../assets/icons/meetme.png';
// import icon26 from '../assets/icons/line.png';
// import icon27 from '../assets/icons/kik.png';
// import icon28 from '../assets/icons/google.png';
// import icon29 from '../assets/icons/Email.png';
// import icon30 from '../assets/icons/foodmenu.png';
// import icon31 from '../assets/icons/facetime.png';
// import icon32 from '../assets/icons/envelope.png';
// import icon33 from '../assets/icons/edit.png';
// import icon34 from '../assets/icons/crypto.png';
// import icon35 from '../assets/icons/contact.png';
// import icon36 from '../assets/icons/chat.png';
// import icon37 from '../assets/icons/changepassword.png';
// import icon38 from '../assets/icons/casgapp.png';
// import icon39 from '../assets/icons/benefitPay.png';
// import icon40 from '../assets/icons/applemusic.png';
// import icon41 from '../assets/icons/Zoom Meeting.png';
// import icon42 from '../assets/icons/Podcast.png';
// import icon43 from '../assets/icons/Microsoft Teams.png';
// import icon44 from '../assets/icons/IOSAppLink.png';
// import icon45 from '../assets/icons/HuaweiAppLink.png';
// import icon46 from '../assets/icons/GoogleReview.png';
// import icon47 from '../assets/icons/play store.png';
// import icon48 from '../assets/icons/Address.png';
// import icon49 from '../assets/icons/outlook.png';
// import icon50 from '../assets/icons/offer.png';
// import icon51 from '../assets/icons/whatsappbusiness.png';
// import icon52 from '../assets/icons/resume.png';
// import icon53 from '../assets/icons/portfolio.png';
// import icon54 from '../assets/icons/printing.png';

// const SocialMediaContact = ({ socialMediaType, socialMedialink, userDirectMode, socialMediaDirectMode, socialMediaName,userPdf }) => {
//     const [linkOpened, setLinkOpened] = useState(false);
//     const [pdfOpened, setPdfOpened] = useState('');
//      console.log(userPdf,"+++",pdfOpened);
//     const socialMediaIcons = {
//         'Facebook': icon,
//         'facebook': icon,
//         'YouTube': icon2,
//         'Yelp': icon3,
//         'X': icon4,
//         'WhatsApp': icon5,
//         'WeChat': icon6,
//         'Website': icon7,
//         'Viber': icon8,
//         'Twitter': icon9,
//         'Venmo': icon10,
//         'Tumblr': icon11,
//         'TikTok': icon12,
//         'Spotify': icon13,
//         'SoundCloud': icon14,
//         'Snapchat': icon15,
//         'snapchat': icon15,
//         'LinkedIn': icon16,
//         'linkedin': icon16,
//         'Instagram': icon17,
//         'Tripadvisor': icon18,
//         'SoundCloud': icon19,
//         'Reddit': icon20,
//         'Phone': icon21,
//         'Paypal': icon22,
//         'Messengerr': icon23,
//         'Messages': icon24,
//         'Meetme': icon25,
//         'Line': icon26,
//         'kik': icon27,
//         'Google': icon28,
//         'Email': icon29,
//         'Food Menu': icon30,
//         'Face time': icon31,
//         'Envelope': icon32,
//         'Edit': icon33,
//         'Crypto': icon34,
//         'contact card': icon35,
//         'Chat': icon36,
//         'Changepassword': icon37,
//         'Casgapp': icon38,
//         'BenefitPay': icon39,
//         'Apple Music': icon40,
//         'Zoom Meeting': icon41,
//         'Podcast': icon42,
//         'Microsoft Teams': icon43,
//         'IOS App': icon44,
//         'Huawei App': icon45,
//         'Google Review': icon46,
//         'Play Store': icon47,
//         'Address': icon48,
//         'Outlook':icon49,
//         'Offers':icon50,
//         'Whatsapp Business':icon51,
//         'Resume': icon52,
//         'Portfolio': icon53,
//         'Catalogue': icon54,

//     };
//     useEffect(() => {
//         console.log('User PDF Updated:', userPdf);
//         setPdfOpened(userPdf);
//     }, [userPdf]);

//     const handleClick = (e) => {
//         // e.preventDefault();
//         console.log("Chlla 1+++", pdfOpened);
//         if (!linkOpened) {
//             console.log("Chlla 2");
//             setLinkOpened(true);
//             if (userPdf) {
//                 console.log("Chlla 3", userPdf);
//                 const trimmedUserPdf = userPdf.replace(/\.pdf$/, '');
//                 if (!userDirectMode) {
//                     console.log("Chlla 4", trimmedUserPdf);
//                     window.open(trimmedUserPdf, '_blank');
//                 } else {
//                     console.log("Chlla 5", trimmedUserPdf);
//                     window.location.href = trimmedUserPdf;
//                 }
//             } else if (socialMediaType === 'WhatsApp' || socialMediaType === 'Whatsapp Business') {
//                 window.location.href = `https://wa.me/${socialMedialink}`;
//             } else if (socialMediaType === 'Phone') {
//                 window.open(`tel:${socialMedialink}`);
//             } else {
//                 window.location.href = socialMedialink;
//             }
//         }
//     };

//     if (userDirectMode && socialMediaDirectMode) {
//                 handleClick({ preventDefault: () => {} });
//                 return null;
//             } else if (!userDirectMode) {
//                 return (
//                     <a
//                     // href={
//                     //     socialMediaType === 'WhatsApp' || socialMediaType === 'Whatsapp Business'
//                     //     ? `https://wa.me/${socialMedialink}`
//                     //     : socialMediaType === 'Email' || socialMediaType === 'Outlook'
//                     //     ? `mailto:${socialMedialink}`
//                     //     : socialMediaType === 'Phone' || socialMedialink.startsWith('tel:')
//                     //     ? `tel:${socialMedialink}`
//                     //     : socialMediaType === 'Resume' || socialMediaType === 'Catalogue' || socialMediaType === 'Portfolio' || socialMediaType === 'Offer' || socialMediaType === 'Food Menu' && userPdf !==null
//                     //     ? userPdf
//                     //     : socialMedialink
//                     // }
//                     target={socialMediaType === 'Resume' ? "_blank" : "_self"}
//                     rel={socialMediaType === 'Resume' ? "noopener noreferrer" : undefined}
//                     onClick={handleClick}
//                 >
//                         <div className='contactsoverly'>
//                             <div className='contacstscontainer'>
//                                 <div>
//                                     <div className='socialMediaIcon'>
//                                         <img
//                                             src={socialMediaIcons[socialMediaType]}
//                                             alt={''}
//                                             className='iconImage'
//                                         />
//                                         <p className="socialmedianame">{socialMediaName}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </a>
//                 );
//             }
// };

// export default SocialMediaContact;
// //     const handleClick = (e) => {
// //         // e.preventDefault();
// //         console.log("Chlla 4",userPdf);
// //         console.log("Chlla 1")
// //         if (linkOpened==false) {
// //             console.log("Chlla 2")
// //             // setLinkOpened(true);
// //             if ( userPdf !== null) {
// //                 console.log("Chlla 3",userPdf);
// //                 if(!userDirectMode){
// //                     console.log("Chlla 3",userPdf);
// //                 const trimmedUserPdf = userPdf?.replace(/\.pdf$/, '');
// //                 window.open(  `${trimmedUserPdf}`, '_blank');
// //                 }else{

// //                     const trimmedUserPdf = userPdf?.replace(/\.pdf$/, '');
// //                     // window.location.href=`${userPdf}`;
// //                 }
// //             }
// //              else if (socialMediaType === 'WhatsApp' || socialMediaType === 'Whatsapp Business') {
// //                 window.location.href = `https://wa.me/${socialMedialink}`;
// //             } else if(socialMediaType === 'Phone'){
// //                 window.open(`tel:${socialMedialink}`)
// //                }
// //             else {
// //                 window.location.href = `${socialMedialink}`;
// //             }
// //         }
// //     };

// //     if (userDirectMode && socialMediaDirectMode) {
// //         handleClick({ preventDefault: () => {} });
// //         return null;
// //     } else if (!userDirectMode) {
// //         return (
// //             <a
// //             // href={
// //             //     socialMediaType === 'WhatsApp' || socialMediaType === 'Whatsapp Business'
// //             //     ? `https://wa.me/${socialMedialink}`
// //             //     : socialMediaType === 'Email' || socialMediaType === 'Outlook'
// //             //     ? `mailto:${socialMedialink}`
// //             //     : socialMediaType === 'Phone' || socialMedialink.startsWith('tel:')
// //             //     ? `tel:${socialMedialink}`
// //             //     : socialMediaType === 'Resume' || socialMediaType === 'Catalogue' || socialMediaType === 'Portfolio' || socialMediaType === 'Offer' || socialMediaType === 'Food Menu' && userPdf !==null
// //             //     ? userPdf
// //             //     : socialMedialink
// //             // }
// //             target={socialMediaType === 'Resume' ? "_blank" : "_self"}
// //             rel={socialMediaType === 'Resume' ? "noopener noreferrer" : undefined}
// //             onClick={handleClick}
// //         >
// //                 <div className='contactsoverly'>
// //                     <div className='contacstscontainer'>
// //                         <div>
// //                             <div className='socialMediaIcon'>
// //                                 <img
// //                                     src={socialMediaIcons[socialMediaType]}
// //                                     alt={''}
// //                                     className='iconImage'
// //                                 />
// //                                 <p className="socialmedianame">{socialMediaName}</p>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </a>
// //         );
// //     }
// //     return null;
// // };

// // export default SocialMediaContact;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/userinfoview.css";
import icon from "../assets/icons/facebook.png";
import icon2 from "../assets/icons/youtube.png";
import icon3 from "../assets/icons/yelp.png";
import icon4 from "../assets/icons/X.png";
import icon5 from "../assets/icons/whatsapp.png";
import icon6 from "../assets/icons/wechat.png";
import icon7 from "../assets/icons/website.png";
import icon8 from "../assets/icons/viber.png";
import icon9 from "../assets/icons/twitterr.png";
import icon10 from "../assets/icons/venmo.png";
import icon11 from "../assets/icons/tumblr.png";
import icon12 from "../assets/icons/tiktok.png";
import icon13 from "../assets/icons/spotify.png";
import icon14 from "../assets/icons/soundcloud.png";
import icon15 from "../assets/icons/snapchat.png";
import icon16 from "../assets/icons/linkedin.png";
import icon17 from "../assets/icons/instagram.png";
import icon18 from "../assets/icons/tripadvisor.png";
// import icon19 from "../assets/icons/soundcloud.png";
import icon20 from "../assets/icons/reddit.png";
import icon21 from "../assets/icons/phone.png";
import icon22 from "../assets/icons/paypal.png";
import icon23 from "../assets/icons/messengerr.png";
import icon24 from "../assets/icons/messages.png";
import icon25 from "../assets/icons/meetme.png";
import icon26 from "../assets/icons/line.png";
import icon27 from "../assets/icons/kik.png";
import icon28 from "../assets/icons/google.png";
import icon29 from "../assets/icons/Email.png";
import icon30 from "../assets/icons/foodmenu.png";
import icon31 from "../assets/icons/facetime.png";
import icon32 from "../assets/icons/envelope.png";
import icon33 from "../assets/icons/edit.png";
import icon34 from "../assets/icons/crypto.png";
import icon35 from "../assets/icons/contact.png";
import icon36 from "../assets/icons/chat.png";
import icon37 from "../assets/icons/changepassword.png";
import icon38 from "../assets/icons/casgapp.png";
import icon39 from "../assets/icons/benefitPay.png";
import icon40 from "../assets/icons/applemusic.png";
import icon41 from "../assets/icons/Zoom Meeting.png";
import icon42 from "../assets/icons/Podcast.png";
import icon43 from "../assets/icons/Microsoft Teams.png";
import icon44 from "../assets/icons/IOSAppLink.png";
import icon45 from "../assets/icons/HuaweiAppLink.png";
import icon46 from "../assets/icons/GoogleReview.png";
import icon47 from "../assets/icons/play store.png";
import icon48 from "../assets/icons/Address.png";
import icon49 from "../assets/icons/outlook.png";
import icon50 from "../assets/icons/offer.png";
import icon51 from "../assets/icons/whatsappbusiness.png";
import icon52 from "../assets/icons/resume.png";
import icon53 from "../assets/icons/portfolio.png";
import icon54 from "../assets/icons/printing.png";
import icon55 from "../assets/icons/newspaper.png";

import icon56 from "../assets/icons/spa.png";
import icon57 from "../assets/icons/laundry.png";
import icon58 from "../assets/icons/bar.png";

import icon59 from "../assets/icons/gym.png";
import icon60 from "../assets/icons/roomservice.png";
import icon61 from "../assets/icons/lounge.png";
import icon62 from "../assets/icons/servicetimings.png";

import icon63 from "../assets/icons/bahrainmap.png";
import icon64 from "../assets/icons/bahrainpin.png";
import icon65 from "../assets/icons/calendar.png";
import icon66 from "../assets/icons/celebration.png";
import icon67 from "../assets/icons/directory.png";
import icon68 from "../assets/icons/swimming.png";

const SocialMediaContact = ({
  socialMediaType,
  socialMedialink,
  socialMediaName,
  socialMediaCustomLogo,
  userDirectMode,
  socialMediaDirectMode,
  userPDF,
  containerBackgroundColor,
  textColor = "black", // ✅ DEFAULT RIGHT HERE
  userId, // ✅ <- accept this
  containerClassName,
  iconClassName,
  nameClassName,
  wrapperClassName,
}) => {
  // console.log("custom logo:", socialMediaCustomLogo);
  const [linkOpened] = useState(false);
  const [userPdf, setPdf] = useState("");
  // const listItems = ["Item 1", "Item 2", "Item 3" /* ... */];
  useEffect(() => {
    // console.log('User PDF Updated:', userPDF);
    setPdf(userPDF);
  }, [userPDF]);
  const socialMediaIcons = {
    Facebook: icon,
    facebook: icon,
    youtube: icon2,
    Yelp: icon3,
    X: icon4,
    WhatsApp: icon5,
    WeChat: icon6,
    Website: icon7,
    Viber: icon8,
    Twitter: icon9,
    Venmo: icon10,
    Tumblr: icon11,
    TikTok: icon12,
    Spotify: icon13,
    SoundCloud: icon14,
    Snapchat: icon15,
    snapchat: icon15,
    LinkedIn: icon16,
    linkedin: icon16,
    Instagram: icon17,
    Tripadvisor: icon18,
    // SoundCloud: icon19,
    Reddit: icon20,
    Phone: icon21,
    Paypal: icon22,
    Messengerr: icon23,
    Messages: icon24,
    Meetme: icon25,
    Line: icon26,
    kik: icon27,
    Google: icon28,
    Email: icon29,
    "Food Menu": icon30,
    "Face time": icon31,
    Envelope: icon32,
    Edit: icon33,
    Crypto: icon34,
    "contact card": icon35,
    Chat: icon36,
    Changepassword: icon37,
    Casgapp: icon38,
    BenefitPay: icon39,
    "Apple Music": icon40,
    "Zoom Meeting": icon41,
    Podcast: icon42,
    "Microsoft Teams": icon43,
    "IOS App": icon44,
    "Huawei App": icon45,
    "Google Review": icon46,
    "Play Store": icon47,
    Address: icon48,
    Outlook: icon49,
    Offers: icon50,
    "Whatsapp Business": icon51,
    Resume: icon52,
    Portfolio: icon53,
    Catalogue: icon54,
    Newspaper: icon55,
    Spa: icon56,
    Laundry: icon57,
    Bar: icon58,
    Gym: icon59,
    Roomservice: icon60,
    Lounge: icon61,
    ServiceTimings: icon62,
    aboutbahrain: icon63,
    placestovisit: icon64,
    eventsinbahrain: icon65,
    celebrations: icon66,
    directory: icon67,
    swimming: icon68,
  };
  // testing github access
  const handleClick = async (e) => {
    try {
    if (userId && socialMediaType) {
      const postUrl = `https://flickapp.vercel.app/user/track/social-view/${userId}`;
      await axios.post(postUrl, { socialMediaType });
    }
  } catch (error) {
  }
    // e.preventDefault();
    let trimmedUserPdf = null; // Initialize the variable

    if (!linkOpened) {
      // setLinkOpened(true);
      if (
        socialMediaType === "Resume" ||
        socialMediaType === "Catalogue" ||
        socialMediaType === "Portfolio" ||
        socialMediaType === "Offers" ||
        socialMediaType === "Food Menu" ||
        socialMediaType === "Newspaper" ||
        socialMediaType === "Spa" ||
        socialMediaType === "Laundry" ||
        socialMediaType === "Bar" ||
        socialMediaType === "Gym" ||
        socialMediaType === "Roomservice" ||
        socialMediaType === "Lounge" ||
        socialMediaType === "aboutbahrain" ||
        socialMediaType === "placestovisit" ||
        socialMediaType === "eventsinbahrain" ||
        socialMediaType === "celebrations" ||
        socialMediaType === "directory" ||
        socialMediaType === "swimming" ||
        (socialMediaType === "ServiceTimings" && userPdf != null)
      ) {
        if (userPdf !== null) {
          trimmedUserPdf = userPdf.replace("http://", "https://");
        } else {
          trimmedUserPdf = socialMedialink.replace("http://", "https://");
        }
        // const trimmedUserPdf = userPdf;
        if (!userDirectMode) {
          window.location.href = trimmedUserPdf;
        } else {
          window.location.href = trimmedUserPdf;
        }
      } else if (
        socialMediaType === "WhatsApp" ||
        socialMediaType === "Whatsapp Business"
      ) {
        window.location.href = `https://wa.me/${socialMedialink}`;
      } else if (socialMediaType === "Phone") {
        window.open(`tel:${socialMedialink}`);
      } else if (socialMediaType === "Email" || socialMediaType === "Outlook") {
        window.location.href = `mailto:${socialMedialink}`;
      } else {
        window.location.href = `${socialMedialink}`;
      }
    }
  };

  if (userDirectMode && socialMediaDirectMode) {
    handleClick();
    return null;
  } else if (!userDirectMode) {
    const iconToShow =
      socialMediaCustomLogo && socialMediaCustomLogo.trim() !== ""
        ? socialMediaCustomLogo
        : socialMediaIcons[socialMediaType];
    // console.log("✅ final textColor in SocialMediaContact:", textColor);

    return (
      <a
        target={socialMediaType === "Resume" ? "_blank" : "_self"}
        rel={socialMediaType === "Resume" ? "noopener noreferrer" : undefined}
        onClick={handleClick}
      >
        <div className="contactsoverly">
          <div
            className={containerClassName || "contacstscontainer"}
            style={{ backgroundColor: containerBackgroundColor }}
          >
            <div>
              <div className={wrapperClassName || "socialMediaIcon"}>
                <img
                  src={
                    socialMediaCustomLogo || socialMediaIcons[socialMediaType]
                  }
                  alt={socialMediaName}
                  className={iconClassName || "iconImage"}
                />
                <p
                  className={nameClassName || "socialmedianame"}
                  style={{ color: textColor }} // ✅ no need for `|| 'black'` anymore
                >
                  {socialMediaName}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="contactsoverly">
            <div
              className="contacstscontainer"
              style={{ backgroundColor: containerBackgroundColor }}
            >
              <div>
                <div className="socialMediaIcon">
                  <img
                    src={socialMediaCustomLogo || socialMediaIcons[socialMediaType]} // Use custom logo if available
                    alt={socialMediaName}
                    className="iconImage"
                  />
                  <p className="socialmedianame" style={{ color: textColor }}>
                    {socialMediaName}
                  </p>
                </div>
              </div>
            </div>
          </div> */}
      </a>
    );
  }
  return null;
};

export default SocialMediaContact;
