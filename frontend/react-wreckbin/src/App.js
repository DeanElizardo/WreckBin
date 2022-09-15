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
  { id: 1, binUrl: "wreckestbin.com/ghna1t52l518ehzh" },
  { id: 2, binUrl: "wreckestbin.com/asldflj3iasldsjd" },
  { id: 3, binUrl: "wreckestbin.com/gasdoa930j3asldj" },
  { id: 4, binUrl: "wreckestbin.com/baso903jfa2ld39j" },
  { id: 5, binUrl: "wreckestbin.com/easldfj093jasldh" }
];

const handleLogin = async event => {
  event.preventDefault();

  try {
    const user = await loginService.login({
      username,
      password,
    });

    window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user));
    noteService.setToken(user.token);

    setUser(user);
    setUsername('');
    setPassword('');
  } catch (error) {
    setErrorMessage('Wrong credentials!');
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  }
};

function App() {
  const [bins, setBins] = useState([])
  // const [currentBin, setCurrentBin] = useState([])

  useEffect(() => {
    setBins(binList);
    // setCurrentBin()
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser');

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      noteService.setToken(user.token);
    }
  }, []);


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
