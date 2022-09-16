import RequestCodeBlock from "../RequestCodeBlock";

const MetaData = () => {
  const codeExample = `
    HTTP/1.1 200 OK
    Date: Mon, 27 Jul 2009 12:28:53 GMT
    Server: Apache/2.2.14 (Win32)
    Last-Modified: Wed, 22 Jul 2009 19:15:56 GMT
    Content-Length: 88
    Content-Type: text/html
    Connection: Closed
  `; 

  return (
    <div className="container mt-5">
      <h1>Request Data sent to URL</h1>
      
      <RequestCodeBlock 
        code={codeExample} 
        language={`javascript`} 
      />
    </div>
  );
}

export default MetaData;