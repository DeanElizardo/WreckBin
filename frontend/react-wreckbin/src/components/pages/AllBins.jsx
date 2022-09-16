import BinLinks from "./BinLinks";

const AllBins = ({ bins }) => {
  return (
    <div className="container mt-5">
      <h1>All bins</h1>
      <div className="row">
        <div className="col-4">
          <BinLinks bins={bins}/>
        </div>
      </div>
    </div>
  );
}

export default AllBins;