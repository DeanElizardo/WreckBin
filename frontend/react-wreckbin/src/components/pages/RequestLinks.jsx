import {Link} from 'react-router-dom'

const RequestLinks = ({ requests }) => {
  return (
    <ul className="p-0">
      {requests.map((request) => (
        <li className="card mb-2 p-2" key={request.uniquedocid}>
          <Link to={request.id}>{request.id}</Link>
        </li>
      ))}
    </ul>
  );
}

export default RequestLinks;