import RequestCodeBlock from "../RequestCodeBlock";
import { getSpecificRequest } from "../../services/bins";
import { useParams } from 'react-router-dom'; 
import { useState, useEffect } from "react"

const MetaData = ({ token }) => {
  const params = useParams();
  const { requestId, binId } = params;
  const [ request, setRequest ] = useState('');
  // /:userId/:binId/:requestId bin id, token, reuqest id 
  
  console.log('binId', binId)
  console.log('token', token)
  console.log('requestId', requestId)

// /**
//   {
//     "createdOn": "2022-09-16T14:13:27.689Z",
//     "payload": {
//         "ipAddress": "5569-2600-1700-8151-30b0-3574-4785-2bde-ac58.ngrok.io",
//         "headers": {
//             "host": "5569-2600-1700-8151-30b0-3574-4785-2bde-ac58.ngrok.io",
//             "user-agent": "curl/7.79.1",
//             "content-length": "9",
//             "accept": "*/*",
//             "content-type": "application/x-www-form-urlencoded",
//             "x-forwarded-for": "170.253.252.192",
//             "x-forwarded-proto": "https",
//             "accept-encoding": "gzip"
//         },
//         "body": {
//             "fizz": "buzz"
//         },
//         "method": "POST",
//         "size": "9"
//     },
// }

//  */


  // const parseRawRequest = (rawRequest) => {
  //   let result = ""; 

  //   const { createdOn, payload } = rawRequest; 
  //   result += `created on: ${createdOn}\n`; 
  //   // payload (body, headers, ipAddress, method, size)

    

  //   Object.keys(payload).map(key => {
      
      
      
  //       //body, headers, method, size, ipAddress
  //   })

  //   return result; 
  // }; 

  useEffect(() => {
    getSpecificRequest(binId, token, requestId).then(specificRequest => {
      console.log(specificRequest);
      // parseRawRequest(specificRequest); 
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

export default MetaData;