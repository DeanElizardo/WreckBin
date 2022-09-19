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

### API Supported Endpoints
Our API supports the following endpoints:

**Action**: Retrieve a new user UUID.  
**Response**: `{"userId":"1ba3a7840fa58d624ffc0b14d686e44a"}`  
**Method**: `POST - /users/uuid`

**Action**: Generate a new bin.    
**Response**: `{"binID":"5e52831ae92445bc249cee87aa416d15"}`  
**Method**: `POST - /users/:userId/new`

**Action**: Retrieve all bins for a given user.  
**Response**: 
```javascript
[
  {
    binid: "ac29f2436eb1b058cdc658fedb99656b",
    userid: "b6a68f0e268110f7021468c47001c0d9", 
    createdon: "2021-09-19T13:21:22.249Z", 
    lastaccessed: "2021-09-19T13:21:22.249Z" 
  }
]
```
**Method**: `GET - /users/:userID`

**Action**: Retrieve all requests for a given bin.  
**Response**: 
```javascript
[
  {
    uniquedocid: "9827ba260855c6f5b3397ad2"
  }
]
```
  
**Method**: `GET - /users/:userID/:binID`

**Action**: Delete a bin and its requests.  
**Response**: `'Bin and associated requests successfully deleted.'`  
**Method**: `DELETE - /users/:userID/:binID`

**Action**: Delete a request.  
**Response**: `'Request successfully deleted.'`  
**Method**: `DELETE - /:userId/:binId/:requestId`

**Action**: Record a Webhook.  
**Response**: 
```javascript
{
  "binId":"778a2446ff1a69a26d79eccc79e1811b",
  "createdOn":"2021-08-19T15:19:17.747Z",
  
  // Please note that the payload will vary by request.
  "payload":{
    "ipAddress":"127.0.0.1:3030",
    "headers":{
      "host":"127.0.0.1:3030",
      "connection":"close",
      "user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:105.0) Gecko/20100101 Firefox/105.0",
      "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      "accept-language":"en-US,en;q=0.5",
      "accept-encoding":"gzip, deflate, br",
      "upgrade-insecure-requests":"1",
      "sec-fetch-dest":"document","sec-fetch-mode":"navigate","sec-fetch-site":"none","sec-fetch-user":"?1",
      "if-none-match":"W/\"278-dRj4ZoAPTlVkbnThWnHkJ/uyhyQ\""
      },
    "method":"GET"
  },"
  id":"632999756436aba49bd10b6d"
  }
```
**Method**: `ALL - /record/:binId`  
