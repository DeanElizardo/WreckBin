import axios from 'axios'

const baseUrl = '/bins'
// bins
// binId
// new


const bin = {
  id: "1", 
  ip: "example.com", 
  url: "wreckestbin.com/ghna1t52l518ehzh",
  requestList: [
    {  }
  ] 
}

const getAllBins = () => {
  let request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const getSpecificBin = (id) => {
  // let request = axios.get(baseUrl);
  // return request.then(response => response.data);

}

const createBin = (newBin) => {
  // let request = axios.post(baseUrl, newBin);
  // return request.then(response => response.data);
};

// const deletePerson = (id) => {
//     let request = axios.delete(`${baseUrl}/${id}`);
//     return request.then(response => response.data);
// }


export default { getAllBins, getSpecificBin, createBin };