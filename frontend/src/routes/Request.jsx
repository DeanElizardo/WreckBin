import RequestCodeBlock from "../components/RequestCodeBlock";
import { getSpecificRequest } from "../services/bins";
import { useParams } from 'react-router-dom'; 
import { useState, useEffect } from "react"

const Request = ({ token }) => {
  const params = useParams();
  const { requestId, binId } = params;
  const [ request, setRequest ] = useState('');

  useEffect(() => {
    getSpecificRequest(binId, token, requestId).then(specificRequest => {
      setRequest(specificRequest);
    })
  }, [binId, token, requestId]);

  return (
    <>
      <div className="container mt-5">
        <h1>Request Data sent to URL</h1>

        <RequestCodeBlock code={JSON.stringify(request, null, 4)} language={`javascript`} />
      </div>
    </>
  );
}

export default Request;