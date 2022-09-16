import axios from 'axios'


export let baseUrl = 'https://e6bf-2600-1700-8151-30b0-3574-4785-2bde-ac58.ngrok.io'; 


const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});


/**
 * Send request to /uuid to get a token (userId)
 * @returns {string} token  
 */
export const createUserId = async () => {
  try {
    const response = await axios.post(`${baseUrl}/users/uuid`); 
    return response.data.userId; 
    
  } catch (err) {
    console.error(err.message)
  }
};

/**
 * Get token stored in local storage 
 */
export const getTokenFromLocalStorage = () => {
  return window.localStorage.getItem('wreckbin-app-userId');
}

/**
 * Set token in local storage 
 */
export const setTokenInLocalStorage = (token) => {
  // if we don't have a token 
  window.localStorage.setItem('wreckbin-app-userId', token);
};


/**
 * Get all bins associated with userID (token)
 * @returns {Array.<Object>} bins 
 */
export const getAllBins = async () => {

  try {
      let token = getTokenFromLocalStorage();
      let response = await axios.get(`${baseUrl}/users/${token}`);
      return response.data; 
    } catch (err) {
    console.error(err.message); 
  }
};

export const getSpecificBin = async (binID, token) => {
  try {
    let response = await axios.get(`${baseUrl}/${token}/${binID}`);
    return response.data.binID;
  } catch (err) {
    console.error(err.message)
  }
};

export const createBin = async (token) => {
  try {
    let response = await axios.post(`${baseUrl}/users/${token}/new`);
    return response.data.binID;
  } catch (err) {
    console.error(err.message);
  }
};

export const createBinURL = ({ binId }) => {
  return `${baseUrl}/record/${binId}`; 
}; 












// const deletePerson = (id) => {
//     let request = axios.delete(`${baseUrl}/${id}`);
//     return request.then(response => response.data);
// }


// export default { getAllBins, getSpecificBin, createBin };



/**
Reminders 
wreckestbin.com/      home page 
                      create a new token 
                      Create Authorization: token (put in local storage)
--------------------------------------------------------------------------

/users/uuid 
/users/:userId                          get all bins associated with user id 
/users/:userId/:binId                   get all requests associated with bin 
/users/:userId/:binId/:requestId        view individual request
/users/:userId/new                      create a new bin 

*/
