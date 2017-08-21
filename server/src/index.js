// require('babel-core/register')({
// 	// "presets": ["es2015-node"]
// 	// ignore false;
// }); // hook for babel

// const express = require('express')
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

app.listen(8080, function() {
	const host = this.address().address;
	const port = this.address().port;
	console.log(`Shard listening at http://${host}:${port}`);
});

// output all uncaught exceptions
process.on('uncaughtException', err => console.exception('uncaught exception:', err));
process.on('unhandledRejection', error => console.error('unhandled rejection:', err)); 