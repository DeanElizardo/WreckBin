const { Pool } = require('pg');

const pool = new Pool();

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};

/*

TODO: Implement in Node-Postgres

// id is not an int but a varchar
// URL isn't needed

CREATE TABLE Bins (
  id SERIAL PRIMARY KEY,
  binId varchar(16) NOT NULL UNIQUE,
  userId varchar (16) NOT NULL,
  createdOn timestamp NOT NULL,
  lastAccessed timestamp NOT NULL,
  deleted boolean DEFAULT false NOT NULL
);

CREATE TABLE Requests (
  id SERIAL PRIMARY KEY,
  binId INT REFERENCES Bins(id)
  uniqueDocId varchar(255)
);

*/

// Removed from database
// ipAddress varchar(15) NOT NULL,
// incomingIp varchar(15) NOT NULL,
// url varchar(255) NOT NULL,
// createdOn timestamp NOT NULL,
// requestType varchar(6)
