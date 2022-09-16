// import { useState, useEffect } from 'react'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'; 

import { useState, useEffect } from 'react'; 

//import services
import { 
  createUserId, 
  createBin,
  getTokenFromLocalStorage, 
  setTokenInLocalStorage,
  getAllBins,
   
} from "./services/bins"; 


//import components
import BinPage from './components/pages/BinPage';
import HomePage from './components/pages/HomePage';
import AllBins from './components/pages/AllBins';
import MetaData from './components/pages/MetaData';
import Navbar from './components/Navbar';

function App() {
  const [bins, setBins] = useState([]);
  const [token, setToken] = useState(''); 

  const registerUser = async () => {
    let token = getTokenFromLocalStorage(); 
    if (!token) {
      token = await createUserId(); 
      setTokenInLocalStorage(token);
    }
    setToken(token)
    return token; 
  };

  const onCreateBin = async () => {
    let token = await registerUser(); 
    let binID = await createBin(token);

    return binID;
  };

  useEffect(() => {
    // Register the User
    registerUser();

    // Get the Users Bins
    getAllBins().then((binList) => {
      setBins(binList)
  });
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <HomePage bins={bins} onCreateBin={onCreateBin} userId={token} /> } />
          <Route path="/binpage/:userId/:binId" element={ <BinPage />} />
          {/* <Route path="/binpage" element={ <BinPage />} /> */}
          <Route path="/allbins" element={ <AllBins bins={bins} />} />
          <Route path="/metadata/:binId/:requestId" element={ <MetaData token={token} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
