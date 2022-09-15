import axios from 'axios'

let token = null;

const baseUrl = '/bins'
/**
Reminders 
wreckestbin.com/      home page 
                      create a new token 
                      Create Authorization: token (put in local storage)
--------------------------------------------------------------------------
API guide 

GET   /uuid           create a token (userId)

GET   /bins           get all bins 
Send user id (Authorization token )

GET   /bins/:binId    Get individual bin 

POST  /bins/new       Create a new bin 

--------------------------------------------------------------------------


Home Page
1. check if there is a userId saved in local storage. 
2. if there is one, send a request to /bins along with userID (aka Authorization: Bearer alsdkfjalsefjsa) and then display in recent bins 
3. if there isn’t one, we wait for click event on “create new bin” button and send request to /uuid to get a brand new token (userId) and then redirect to that bin. 


Bin Page
1. Dynamically generate bin endpoint
2. Generate code snippets with dynamically generated endpoint
3. Request all requests the user sent previously to /record/:userId
*/



const setToken = newToken => {
  token = `bearer ${newToken}`;
};

const getAllBins = () => {
  const config = {
    headers: { Authorization: token },
  };
  
  let request = axios.get(baseUrl, config);
  return request.then(response => response.data);
};


const getSpecificBin = (id) => {
  const config = {
    headers: { Authorization: token },
  };

  // let request = axios.get(baseUrl);
  // return request.then(response => response.data);

}

const createBin = (newBin) => {
  const config = {
    headers: { Authorization: token },
  };

  // let request = axios.post(baseUrl, newBin);
  // return request.then(response => response.data);
};

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};











// const deletePerson = (id) => {
//     let request = axios.delete(`${baseUrl}/${id}`);
//     return request.then(response => response.data);
// }


export default { getAllBins, getSpecificBin, createBin };