// import { useState, useEffect } from 'react'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'; 

import { useState, useEffect } from 'react'; 

//import services
//import components
import BinPage from './components/pages/BinPage';
import HomePage from './components/pages/HomePage';
import AllBins from './components/pages/AllBins';
import MetaData from './components/pages/MetaData';

const binList = [
  { id: 1, binUrl: "wreckestbin.com/bins/ghna1t52l518ehzh" },
  { id: 2, binUrl: "wreckestbin.com/bins/asldflj3iasldsjd" },
  { id: 3, binUrl: "wreckestbin.com/bins/gasdoa930j3asldj" },
  { id: 4, binUrl: "wreckestbin.com/bins/baso903jfa2ld39j" },
  { id: 5, binUrl: "wreckestbin.com/bins/easldfj093jasldh" }
];

function App() {
  const [bins, setBins] = useState([])
  // const [currentBin, setCurrentBin] = useState([])

  useEffect(() => {
    setBins(binList);
    // setCurrentBin()
  }, [])
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <HomePage bins={bins} />} />
          <Route path="/binpage" element={ <BinPage />} />
          <Route path="/allbins" element={ <AllBins bins={bins} />} />
          <Route path="/metadata" element={ <MetaData />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
