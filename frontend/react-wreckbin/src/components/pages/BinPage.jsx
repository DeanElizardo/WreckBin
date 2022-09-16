import { useState } from 'react'; 
import { useParams } from "react-router-dom";
import { createBinURL } from "../../services/bins";
import RequestCodeBlock from '../RequestCodeBlock';

const BinPage = () => {
  const params = useParams();

  const url = createBinURL(params)
  const [snippet, setSnippet] = useState('curl')

  // record/:binid
  const snippetMap = {
    "curl": `
      curl -X POST -d "fizz=buzz" ${url}
    `, 
    "node": `
      var request = require('request');
      var url ='${url}'
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
  }


  return (
    <div className="container">
      <div className="card size-5 mt-5 mb-5">{url}</div>

      <div className="card p-4">
        <ul className="nav nav-pills p-2">
          <li className="nav-item">
            <button 
              className={`nav-link active`}
              aria-current="page"
              onClick={() => handleClick('curl')}
            >
              curl
            </button>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link"
              onClick={() => handleClick('node')}
            >
              Node.js
            </button>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link"
              onClick={() => handleClick('ruby')}
            >
              Ruby
            </button>
          </li>
        </ul>
        <div className="form-floating">
          
          <RequestCodeBlock 
            code={snippetMap[snippet]} 
            language={`javascript`} 
          />
      
        </div>
      </div>

      <div>
        <ul>Requests</ul>
      </div>
    </div>
  );
}

export default BinPage;