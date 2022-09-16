import { useState, useEffect } from 'react'; 
import { useParams } from "react-router-dom";
import { createBinURL, getAllRequests } from "../../services/bins";
import RequestCodeBlock from '../RequestCodeBlock';
import RequestLinks from "../RequestLinks"; 

const BinPage = () => {
  const params = useParams();
  console.log('Params', params)
  const { binId, userId } = params; 
  const url = createBinURL(params);
  const [snippet, setSnippet] = useState('curl');
  
  const [requests, setRequests] = useState([]);

  const [snippetData, setSnippetData] = useState([
    { id: "1", name: "curl", type: "curl", isActive: true },
    { id: "2", name: "Node.js", type: "node", isActive: false },
    { id: "3", name: "Ruby", type: "ruby", isActive: false }
  ]);

  // record/:binid
  const snippetMap = {
    "curl": `
      curl -X POST -d "fizz=buzz" ${url}
    `, 
    "node": `
      var request = require('request');
      var url ='${url}';
      request(url, function (error, response, body) {
        if (!error) {
          console.log(body);
        }
      });
    `, 
    "ruby": `
      require 'open-uri'
      result = open('${url}')
      result.lines { |f| f.each_line {|line| p line} }
    `, 
  }
  
  const handleClick = (snippetType) => {
    setSnippet(snippetType)
    setSnippetData((prevState) => {
      return prevState.map(snippet => {
        if (snippet.type === snippetType) {
          snippet.isActive = true; 
        } else {
          snippet.isActive = false; 
        }
        return snippet; 
      })
    })
  }; 

  const renderSnippetTabs = () => {
    return snippetData.map(snippet => {
      return (
        <li className="nav-item" key={snippet.id}>
          <button 
            className={`nav-link ${snippet.isActive && 'active'}`}
            aria-current="page"
            onClick={() => handleClick(snippet.type)}
          >
            {snippet.name}
          </button>
        </li>
      )
    })
  }; 


  useEffect(() => {
    getAllRequests(binId).then(data => {
      console.log('Data:', data)
      setRequests(data)
    })
  }, [binId])


  return (
    <div className="container">
      <div className="card size-5 mt-5 mb-5">{url}</div>

      <div className="card p-4">
        <ul className="nav nav-pills p-2">
          {renderSnippetTabs()}
        </ul>
        <div className="form-floating">
          
          <RequestCodeBlock 
            code={snippetMap[snippet]} 
            language={`javascript`} 
          />
      
        </div>
      </div>

      <div className="mt-4">
        <h2>Requests</h2>
        <RequestLinks requests={requests} binId={binId}/>
      </div>
    </div>
  );
}

export default BinPage;