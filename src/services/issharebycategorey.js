async function fetchData(userid) {
    
    try {
        const response = await fetch(`https://flickapp.vercel.app/user/share-by-categorey-update/${userid}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('There was a problem with the fetch operation: ' + error.message);
    }
}
async function saveDataTodefault(userid) {

    try {
      const response = await fetch(`https://flickapp.vercel.app/user/updatesharebycategoreyoption/${userid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if needed
        },
        body: JSON.stringify({
            selectedCatgBtnOptionValue:"default",
            isChoosedCatgBtnOptions:false,

        }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      return responseData;
     
    } catch (error) {
      throw new Error('There was a problem with the save operation: ' + error.message);
    }
  }
  
export  {fetchData,saveDataTodefault};

