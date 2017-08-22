// npm packages
import express from 'express';
import bodyParser from "body-parser";
import morgan from 'morgan';

//  our packages
import {logger} from './util/logger.js';

// init app
const app = express();

// setup logging
app.use(morgan('combined', {stream: logger.stream}));


// add body-parsing
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www--form-urlencoded


// test method
app.get('/', (req, res) => {
  res.send('Hello World!')
});

// catch all unhandled errors
app.use((err, req, res) => {
	console.error(err.stack);
	res.status(500).send(err);
});

// export app
export default app;