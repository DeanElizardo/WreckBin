import { Link } from "react-router-dom";

// May need to adjust links once page created.
const RequestLinks = ({ requests, binId }) => {
  return (
    <ul className="p-0">
      {requests.map((request) => (
        <li className="card mb-2 p-2" key={request.uniquedocid}>
          <Link
            to={`/metadata/${binId}/${request.uniquedocid}`}
          >
            {request.uniquedocid}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RequestLinks;
