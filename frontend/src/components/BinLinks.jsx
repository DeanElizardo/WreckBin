import { Link } from "react-router-dom";

const BinLinks = ({ bins }) => {
  return (
    <ul className="p-0">
      {bins.map((bin) => (
        <li className="card mb-2 p-2" key={bin.binid}>
          <Link to={`/binpage/${bin.userid}/${bin.binid}`}>{bin.binid}</Link>
        </li>
      ))}
    </ul>
  );
}

export default BinLinks;