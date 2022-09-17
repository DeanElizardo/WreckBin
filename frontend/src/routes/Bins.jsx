import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import BinLinks from "../components/BinLinks";
import {createUserId, getTokenFromLocalStorage, setTokenInLocalStorage, createBin, getAllBins} from '../services/bins'

const AllBins = () => {
    const navigate = useNavigate();
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

    const handleCreateBin = async (userId) => {
        let binID = await onCreateBin(userId);
        navigate(`/binpage/${userId}/${binID}`);
    };

    return (
      <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-8">
                    <h1 className="title mb-3">Create a WreckBin</h1>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleCreateBin(token)}
                    >
                        Create a New Bin!
                    </button>
                </div>

                <div className="col-4">
                    <h2>My recent bins</h2>
                    <BinLinks bins={bins} />
                </div>
            </div>
        </div>
        </>
    );
}

export default AllBins
