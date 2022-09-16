import axios from 'axios';

export let baseUrl = 'http://localhost:3030';

/**
 * Send request to /uuid to get a token (userId)
 * @returns {string} token
 */
export const createUserId = async () => {
  try {
    const response = await axios.post(`${baseUrl}/users/uuid`);
    return response.data.userId;
  } catch (err) {
    console.error(err.message);
  }
};

/**
 * Get token stored in local storage
 */
export const getTokenFromLocalStorage = () => {
  return window.localStorage.getItem('wreckbin-app-userId');
};

/**
 * Set token in local storage
 */
export const setTokenInLocalStorage = token => {
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
    const response = await axios.get(`${baseUrl}/users/${token}`);

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
    console.error(err.message);
  }
};

export const createBin = async token => {
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

export const getAllRequests = async binId => {
  try {
    let token = getTokenFromLocalStorage();
    const response = await axios.get(`${baseUrl}/users/${token}/${binId}`);

    return response.data;
  } catch (err) {
    console.error(err.message);
  }
};

export const getSpecificRequest = async (binID, token, requestId) => {
  try {
    let response = await axios.get(
      `${baseUrl}/users/${token}/${binID}/${requestId}`
    );

    return response.data;
  } catch (err) {
    console.error(err.message);
  }
};

// const deletePerson = (id) => {
//     let request = axios.delete(`${baseUrl}/${id}`);
//     return request.then(response => response.data);
// }

// export default { getAllBins, getSpecificBin, createBin };

/**
Reminders 
wreckbin.com/      home page 
                      create a new token 
                      Create Authorization: token (put in local storage)
--------------------------------------------------------------------------

/users/uuid 
/users/:userId                          get all bins associated with user id 
/users/:userId/:binId                   get all requests associated with bin 
/users/:userId/:binId/:requestId        view individual request
/users/:userId/new                      create a new bin 

*/
