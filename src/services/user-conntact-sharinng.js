async function saveShareContact(dataWithUserid) {
    console.log("===",dataWithUserid);
        try {
          const response = await fetch(`https://flickapp.vercel.app/user/user-info/share`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // Add any other headers if needed
            },
            body: JSON.stringify({
              
                company: dataWithUserid?.company,
                email: dataWithUserid?.email,
                jobTitle: dataWithUserid?.jobTitle,
                name: dataWithUserid?.name,
                notes:dataWithUserid?.notes,
                phone: dataWithUserid?.phone,
                userId: dataWithUserid?.userId
              
              
    
            }),
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const responseData = await response.json();
          console.log("===",responseData);
          return responseData;
         
        } catch (error) {
          throw new Error('There was a problem with the save operation: ' + error.message);
        }
      }
      
    export  {saveShareContact};