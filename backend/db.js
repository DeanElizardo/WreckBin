const { Pool } = require('pg');

const pool = new Pool();

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};

/*

TODO: Implement in Node-Postgres

CREATE TABLE Bins {
  id INT PRIMARY KEY,
  ipAddress varchar(15) NOT NULL,
  url varchar(255) NOT NULL,
  createdOn timestamp NOT NULL,
  lastAccessed timestamp NOT NULL,
  deleted boolean DEFAULT false NOT NULL,
}

CREATE TABLE Requests {
  id INT PRIMARY KEY,
  binId INT FOREIGN KEY REFERENCES Bins(id)
  requestType varchar(6)
  createdOn timestamp NOT NULL,
  incomingIp varchar(15) NOT NULL,
  uniqueDocId varchar(255),
}

*/
