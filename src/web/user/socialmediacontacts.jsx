import React, { useState } from "react";
import '../styles/userinfoview.css';
import icon from '../assets/icons/facebook.png';
import icon2 from '../assets/icons/youtube.png';
import icon3 from '../assets/icons/yelp.png';
import icon4 from '../assets/icons/X.png';
import icon5 from '../assets/icons/whatsapp.png';
import icon6 from '../assets/icons/wechat.png';
import icon7 from '../assets/icons/website.png';
import icon8 from '../assets/icons/viber.png';
import icon9 from '../assets/icons/twitterr.png';
import icon10 from '../assets/icons/venmo.png';
import icon11 from '../assets/icons/tumblr.png';
import icon12 from '../assets/icons/tiktok.png';
import icon13 from '../assets/icons/spotify.png';
import icon14 from '../assets/icons/soundcloud.png';
import icon15 from '../assets/icons/snapchat.png';
import icon16 from '../assets/icons/linkedin.png';
import icon17 from '../assets/icons/instagram.png';
import icon18 from '../assets/icons/tripadvisor.png';
import icon19 from '../assets/icons/soundcloud.png';
import icon20 from '../assets/icons/reddit.png';
import icon21 from '../assets/icons/phone.png';
import icon22 from '../assets/icons/paypal.png';
import icon23 from '../assets/icons/messengerr.png';
import icon24 from '../assets/icons/messages.png';
import icon25 from '../assets/icons/meetme.png';
import icon26 from '../assets/icons/line.png';
import icon27 from '../assets/icons/kik.png';
import icon28 from '../assets/icons/google.png';
import icon29 from '../assets/icons/Email.png';
import icon30 from '../assets/icons/foodmenu.png';
import icon31 from '../assets/icons/facetime.png';
import icon32 from '../assets/icons/envelope.png';
import icon33 from '../assets/icons/edit.png';
import icon34 from '../assets/icons/crypto.png';
import icon35 from '../assets/icons/contact.png';
import icon36 from '../assets/icons/chat.png';
import icon37 from '../assets/icons/changepassword.png';
import icon38 from '../assets/icons/casgapp.png';
import icon39 from '../assets/icons/benefitPay.png';
import icon40 from '../assets/icons/applemusic.png';
import icon41 from '../assets/icons/Zoom Meeting.png';
import icon42 from '../assets/icons/Podcast.png';
import icon43 from '../assets/icons/Microsoft Teams.png';
import icon44 from '../assets/icons/IOSAppLink.png';
import icon45 from '../assets/icons/HuaweiAppLink.png';
import icon46 from '../assets/icons/GoogleReview.png';
import icon47 from '../assets/icons/play store.png';
import icon48 from '../assets/icons/Address.png';
import icon49 from '../assets/icons/outlook.png';
import icon50 from '../assets/icons/offer.png';
import icon51 from '../assets/icons/whatsappbusiness.png';
import icon52 from '../assets/icons/resume.png';
import icon53 from '../assets/icons/portfolio.png';
import icon54 from '../assets/icons/printing.png';

const SocialMediaContact = ({ socialMediaType, socialMedialink, userDirectMode, socialMediaDirectMode, socialMediaName }) => {
    const [linkOpened, setLinkOpened] = useState(false);
    const userPdf="https://res.cloudinary.com/diwspe6yi/image/upload/v1719418834/flick-app-userpdf/lm7z1gkeaq3fcapkpjuz"

    const socialMediaIcons = {
        'Facebook': icon,
        'facebook': icon,
        'YouTube': icon2,
        'Yelp': icon3,
        'X': icon4,
        'WhatsApp': icon5,
        'WeChat': icon6,
        'Website': icon7,
        'Viber': icon8, 
        'Twitter': icon9,
        'Venmo': icon10,
        'Tumblr': icon11,
        'TikTok': icon12,
        'Spotify': icon13,
        'SoundCloud': icon14,
        'Snapchat': icon15,
        'snapchat': icon15,
        'LinkedIn': icon16,
        'linkedin': icon16,
        'Instagram': icon17,
        'Tripadvisor': icon18,
        'SoundCloud': icon19,
        'Reddit': icon20,
        'Phone': icon21,
        'Paypal': icon22,
        'Messengerr': icon23,
        'Messages': icon24,
        'Meetme': icon25,
        'Line': icon26,
        'kik': icon27,
        'Google': icon28,
        'Email': icon29,
        'Food Menu': icon30,
        'Face time': icon31,
        'Envelope': icon32,
        'Edit': icon33,
        'Crypto': icon34,
        'contact card': icon35,
        'Chat': icon36,
        'Changepassword': icon37,
        'Casgapp': icon38,
        'BenefitPay': icon39,
        'Apple Music': icon40,
        'Zoom Meeting': icon41,
        'Podcast': icon42,
        'Microsoft Teams': icon43,
        'IOS App': icon44,
        'Huawei App': icon45,
        'Google Review': icon46,
        'Play Store': icon47,
        'Address': icon48,
        'Outlook':icon49,
        'Offers':icon50,
        'Whatsapp Business':icon51,
        'Resume': icon52,
        'Portfolio': icon53,
        'Catalogue': icon54,
        
    };

    const handleClick = (e) => {
        // e.preventDefault();
        if (!linkOpened) {
            setLinkOpened(true);
            if (socialMediaType === 'Resume' || socialMediaType === 'Catalogue' || socialMediaType === 'Portfolio' || socialMediaType === 'Offer' || socialMediaType === 'Food Menu' && userPdf !==null ) {  
                
                const trimmedUserPdf = userPdf.replace(/\.pdf$/, '');
                window.open(`${trimmedUserPdf}`, '_blank');
                
            }
             else if (socialMediaType === 'WhatsApp' || socialMediaType === 'Whatsapp Business') {
                window.location.href = `https://wa.me/${socialMedialink}`;
            } else if(socialMediaType === 'Phone'){
                window.open(`tel:${socialMedialink}`)
               }
            else {
                window.location.href = `${socialMedialink}`;
            }
        }
    };

    if (userDirectMode && socialMediaDirectMode) {
        handleClick();
        return null;
    } else if (!userDirectMode) {
        return (
            <a
            href={
                socialMediaType === 'WhatsApp' || socialMediaType === 'Whatsapp Business'
                ? `https://wa.me/${socialMedialink}`
                : socialMediaType === 'Email' || socialMediaType === 'Outlook'
                ? `mailto:${socialMedialink}`
                : socialMediaType === 'Phone' || socialMedialink.startsWith('tel:')
                ? `tel:${socialMedialink}`
                : socialMediaType === 'Resume' || socialMediaType === 'Catalogue' || socialMediaType === 'Portfolio' || socialMediaType === 'Offer' || socialMediaType === 'Food Menu' && userPdf !==null 
                ? userPdf
                : socialMedialink
            }
            target={socialMediaType === 'Resume' ? "_blank" : "_self"}
            rel={socialMediaType === 'Resume' ? "noopener noreferrer" : undefined}
            onClick={handleClick}
        >
                <div className='contactsoverly'>
                    <div className='contacstscontainer'>
                        <div>
                            <div className='socialMediaIcon'>
                                <img
                                    src={socialMediaIcons[socialMediaType]}
                                    alt={''}
                                    className='iconImage'
                                />
                                <p className="socialmedianame">{socialMediaName}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        );
    }
    return null;
};

export default SocialMediaContact;
