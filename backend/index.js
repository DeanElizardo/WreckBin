const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const viewRouter = require('./routes/view.js');
const recordRouter = require('./routes/record.js');

dotenv.config();

const app = express();

// Cors
app.use(cors());

// Body Parsers
app.use(express.urlencoded()); // URL Encoded
app.use(express.json()); // JSON
app.use(express.text()); // Text
app.use(express.raw()); // Raw
app.use(express.static('build'));
app.use(morgan('dev'));

app.use('/users', viewRouter);
app.use('/record', recordRouter);

app.get('/*', (req, res) => {
  res.sendFile(
    '/var/www/overcaffeinated.dev/development/html/index.html',
    err => {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.use((req, res) => {
  res.status(404);
  res.send(process.env.RESOURCE_NOT_FOUND);
});

app.use((err, req, res) => {
  res.status(500);
  res.send(process.env.SERVER_ERROR);
});

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log('Server is up and listening on port', process.env.PORT);
});
