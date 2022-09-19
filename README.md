# Welcome to WreckBin

## Overview
Our application allows you to view and analyze the output of your webhooks by exposing an API endpoint that will record all relevant data. Go ahead and try it out!

## Developer Settings
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