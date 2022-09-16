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
  getSpecificBin 
} from "./services/bins"; 


//import components
import BinPage from './components/pages/BinPage';
import HomePage from './components/pages/HomePage';
import AllBins from './components/pages/AllBins';
import MetaData from './components/pages/MetaData';
import Navbar from './components/Navbar';

// const binList = [
//   { id: 1, binUrl: "wreckestbin.com/ghna1t52l518ehzh" },
//   { id: 2, binUrl: "wreckestbin.com/asldflj3iasldsjd" },
//   { id: 3, binUrl: "wreckestbin.com/gasdoa930j3asldj" },
//   { id: 4, binUrl: "wreckestbin.com/baso903jfa2ld39j" },
//   { id: 5, binUrl: "wreckestbin.com/easldfj093jasldh" }
// ];


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
    // setBinId(binID)

    return binID;
  };

  const getBinList = async () => {
    let binList = await getAllBins();
    return binList;
  }

  useEffect(() => {
    getAllBins().then((binList) => {
      console.log(binList)
      setBins(binList)
  });
  }, []);

  useEffect(() => {
    registerUser();
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
