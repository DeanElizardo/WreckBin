# Welcome to WreckBin

## Overview
Our application allows you to view and analyze the output of your webhooks by exposing an API endpoint that will record all relevant data. Go ahead and try it out!

## Developer Settings

### Testing the Frontend Locally
If you're working locally and would like to test the frontend, you'll need to comment out the following line in the backend `index.js` to make sure that the app is not serving the frontend via the static build folder:

```javascript
app.use(express.static('build'));
```

### Postgres Settings
In order to utilize our application locally, you'll need to retrieve and set the relevant environmental variables. Additionally, you'll need to setup both MongoDB and PostgreSQL database.

The SQL commands for setting up our PostgreSQL database are:
```sql
CREATE DATABASE wreckbin;

CREATE TABLE Bins (
  id SERIAL PRIMARY KEY,
  binId varchar(32) NOT NULL UNIQUE,
  userId varchar (32) NOT NULL,
  createdOn timestamp NOT NULL,
  lastAccessed timestamp NOT NULL,
  deleted boolean DEFAULT false NOT NULL
);

CREATE TABLE Requests (
  id SERIAL PRIMARY KEY,
  binId varchar(32) REFERENCES Bins(binId) ON DELETE CASCADE,
  uniqueDocId varchar(255)
);
```