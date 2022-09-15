import BinLinks from "./BinLinks";


const HomePage = ({ bins }) => {


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-8">
                    <h1 className="title mb-3">Create a RequestBin</h1>
                    <button type="button" className="btn btn-primary">create a new bin</button>
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