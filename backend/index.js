import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { viewRouter } from './routes/view.js';
import { recordRouter } from './routes/record.js';
import * from 'dotenv';

dotenv.config();

const app = express();

app.use(morgan('dev'));

app.use('/bins', viewRouter);

app.use('/record', recordRouter);

app.use((req, res, next) => {
  res.status(404);
  res.send(process.env.RESOURCE_NOT_FOUND);
}

app.use((err, req, res, next) => {
  res.status(500);
  res.send(process.env.SERVER_ERROR);
});

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log("Server is up and listening on port", process.env.PORT);
});
