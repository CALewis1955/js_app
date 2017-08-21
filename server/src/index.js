//const express = require('express')
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// catch all unhandled errors
app.use((err, req, res) => {
	console.error(err.stack);
	res.status(500).send(err);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})