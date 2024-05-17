import React, { useEffect, useState } from 'react';
import axios from 'axios';
import userimg from '../assets/user1.png';
import SocialMediaContact from './socialmediacontacts';
import { fetchData } from '../../services/issharebycategorey';
import { saveDataTodefault } from '../../services/issharebycategorey';
import { GridLoader } from 'react-spinners';
const UserInfo = () => {
  const [userData, setUserData] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [value, setValue] = useState(true);
  const tokens = userData?.deviceToken;
  localStorage.setItem('tokens', JSON.stringify(tokens));
  const userid = window.location.pathname.slice(1)
  useEffect(() => {
    if (!userid) {
      alert('User ID is empty');
      return;
    }

    
     
      fetchUserData();
   
    // saveDataTodefault({ userid, value:false });
    // fetchDataWithDelay();
  }, []);
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const fetchDataWithDelay = async () => {
    await delay(1000);
    fetchCategoryData();
  };

  const fetchUserData = async () => {

    try {
      const response = await fetch(`https://flickapp.vercel.app/user/${window.location.pathname.slice(1)}`);
      const data = await response.json();

      setUserData(data.data);
      if (data.data.isSHareByCatgOn == true) {
        // If user is shareable by category, start fetching category data
         
    saveDataTodefault({ userid, value:false });
        // fetchCategoryData();
        fetchDataWithDelay();
      }
    } catch (error) {
      console.error('Error fetching user details:', error);

    }
  };

  const fetchCategoryData = async () => {
    let newData = null;
    let timer;
    const timers = setTimeout(() => {
      sendNotificationToUser(userData?.deviceToken);

    }, 1000);
    const handleTimeout = () => {

      if (newData?.selectedCatgBtnOptionValue === 'default') {
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
      while (!newData || newData?.selectedCatgBtnOptionValue === 'default') {
        newData = await fetchData(userid);
        setFetchedData(newData);
        await new Promise(resolve => setTimeout(resolve, 6000));
      }
    } catch (error) {
      console.error('Error fetching category data:', error);
    } finally {
      stopTimer();
      setLoading(false);
    }
  };
  if (cancel == true) {
    return (< div className='auto_cancel'>
      <h1>Apologies</h1>
      <p className='cancel_data'>We regret to inform you that the user is currently unable to respond.</p>
      <p className='cancel_data'>Please try again later.</p>
    </div>);
  }

  if (fetchedData?.selectedCatgBtnOptionValue == 'default') {
    return (
      <div className='spinner'>
        <GridLoader color={'#aeb5cf'} loading={loading} size={30} />
        <h1>Please Wait For User </h1>
        <h1>Response</h1>
      </div>
    );
  }
  if (fetchedData?.selectedCatgBtnOptionValue == 'canceled') {
    return (
      <div class="canceltext-container">
        <div class="canceltext">
          <h1>Your request has been canceled by the user. Please try again</h1>
        </div>
      </div>
    );
  }
  if (fetchedData?.selectedCatgBtnOptionValue === 'Business' || fetchedData?.selectedCatgBtnOptionValue === 'business') {

    return (
      <div>
        <div className='overlay'>
          <div className='modal'>
            <div className='userimgcontainer'>
              <img src={userData?.userImage || userimg} alt='' className='userimg' title='Click to view full image' />
            </div>
            <div className='usrdta'>

              <h1>{userData?.name}</h1>
              <p className='profession'>{userData?.profession}</p>
              <p>{userData?.organization}</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              {userData?.socialMedia
                .filter((socialMedia) => socialMedia.category == 'Business' && socialMedia.isActive == true)
                .map((socialMedia) => (
                  <SocialMediaContact
                    key={socialMedia._id}
                    socialMediaType={socialMedia.socialMediaType}
                    socialMediaName={socialMedia.socialMediaName}
                    socialMedialink={socialMedia.socialMediaLink}
                    userDirectMode={userData.directMode}
                    socialMediaDirectMode={socialMedia.socialMediaDirectMode}
                    cat={socialMedia.category}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (fetchedData?.selectedCatgBtnOptionValue == 'public') {

    return (
      <div>
        <div className='overlay'>
          <div className='modal'>
            <div className='userimgcontainer'>
              <img src={userData?.userImage || userimg} alt='' className='userimg' title='Click to view full image' />
            </div>
            <div className='usrdta'>

              <h1>{userData?.name}</h1>
              <p className='profession'>{userData?.profession}</p>
              <p>{userData?.organization}</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              {userData?.socialMedia
                .filter((socialMedia) => socialMedia.category === 'Public' && socialMedia.isActive == true)
                .map((socialMedia) => (
                  <SocialMediaContact
                    key={socialMedia._id}
                    socialMediaType={socialMedia.socialMediaType}
                    socialMediaName={socialMedia.socialMediaName}
                    socialMedialink={socialMedia.socialMediaLink}
                    userDirectMode={userData.directMode}
                    socialMediaDirectMode={socialMedia.socialMediaDirectMode}
                    cat={socialMedia.category}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (fetchedData?.selectedCatgBtnOptionValue == 'all') {
    return (
      <div>
        <div className='overlay'>
          <div className='modal'>
            <div className='userimgcontainer'>
              <img src={userData?.userImage || userimg} alt='' className='userimg' title='Click to view full image' />
            </div>
            <div className='usrdta'>

              <h1>{userData?.name}</h1>
              <p className='profession'>{userData?.profession}</p>
              <p>{userData?.organization}</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              {userData?.socialMedia
                .filter((socialMedia) => socialMedia)
                .map((socialMedia) => (
                  <SocialMediaContact
                    key={socialMedia._id}
                    socialMediaType={socialMedia.socialMediaType}
                    socialMediaName={socialMedia.socialMediaName}
                    socialMedialink={socialMedia.socialMediaLink}
                    userDirectMode={userData.directMode}
                    socialMediaDirectMode={socialMedia.socialMediaDirectMode}
                    cat={socialMedia.category}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (userData && userData.isActive === true) {
    setTimeout(() => {
      alert('This account is private and cannot be viewed');
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
      const storedTokens = localStorage.getItem('tokens');
      const tokens = storedTokens ? JSON.parse(storedTokens) : [];


      // Iterate over each device token
      for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        // Make an HTTP request to FCM API for each token
        const response = await axios.post('https://fcm.googleapis.com/fcm/send', {
          to: token,
          notification: {
            title: "Your Flick Digital Card has been Tapped.",
            body: "Kindly choose a category you want to share.",
            sound: "default"
          },
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer AAAAtv0TDgY:APA91bHbsmbrbDpSXx2qDJauc2-EiZ-l1AwJAZw36b9A0m7BG_NccAguillBAc9J308ykeC66HlqIiXYesmo505oXQFeT7x1GnDDO6mZIdhunL7SlqnJG_lyLuQ25zHzX_rzrkgETb1o`,
          },
        });

        console.log('Notification sent successfully to token:', token);
        console.log('Response:', response.data);
      }
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  }


  if (userData?.isSHareByCatgOn == false) {
    return (
      <div>
        <div className='overlay'>
          <div className='modal'>
            <div className='userimgcontainer'>
              <img src={userData?.userImage || userimg} alt='' className='userimg' title='Click to view full image' />
            </div>
            <div className='usrdta'>

              <h1>{userData?.name}</h1>
              <p className='profession'>{userData?.profession}</p>
              <p>{userData?.organization}</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              {userData?.socialMedia
                .filter((socialMedia) => socialMedia.isActive)
                .map((socialMedia) => (
                  <SocialMediaContact
                    key={socialMedia._id}
                    socialMediaType={socialMedia.socialMediaType}
                    socialMediaName={socialMedia.socialMediaName}
                    socialMedialink={socialMedia.socialMediaLink}
                    userDirectMode={userData.directMode}
                    socialMediaDirectMode={socialMedia.socialMediaDirectMode}
                    cat={socialMedia.category}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default UserInfo;
