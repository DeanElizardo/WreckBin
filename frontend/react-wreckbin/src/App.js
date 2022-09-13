// import { useState, useEffect } from 'react'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'; 

//import services
//import components
// import BinPage from './components/pages/BinPage';
import HomePage from './components/pages/HomePage';
// import AllBins from './components/pages/AllBins';
// import MetaData from './components/pages/MetaData';

function App() {
  //states

  //useEffect (services)


  
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={ <HomePage />} />
          {/* <Route path="/binpage" element={ <BinPage />} />
          <Route path="/allbins" element={ <AllBins />} />
          <Route path="/metadata" element={ <MetaData />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
