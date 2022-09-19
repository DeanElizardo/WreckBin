import BinLinks from "./BinLinks";
import { useNavigate } from "react-router-dom";

const HomePage = ({ bins, onCreateBin, userId }) => {

    const navigate = useNavigate(); 
    const handleCreateBin = async (userId) => {
        let binID = await onCreateBin(userId);
        navigate(`/binpage/${userId}/${binID}`);
    }; 

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-8">
                    <h1 className="title mb-3">Create a WreckBin</h1>
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={() => handleCreateBin(userId)}
                    >
                        create a new bin
                    </button>
                </div>

                <div className="col-4">
                    <h2>My recent bins</h2>
                    <BinLinks bins={bins} />
                </div>
            </div>
        </div>
    );
}

export default HomePage;