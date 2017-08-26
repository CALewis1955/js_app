
import app from './app';
import { logger } from './util/logger';

// initialize database
import { thinky } from './db';

// wait for db to initialize
thinky.dbReady().then(() => {
  logger.info('Database ready, starting server...');
  app.listen(8080, function() {
    const host = this.address().address;
	const port = this.address().port;
	logger.info(`Experts server listening at http://${host}:${port}`);
  });
});

// output all uncaught exceptions
process.on('uncaughtException', err => console.error('uncaught exception:', err));
process.on('unhandledRejection', error => console.error('unhandled rejection:', error)); 