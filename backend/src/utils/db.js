import mongoose from 'mongoose';

/**
 * Configuration
 */
import env from '../config/env';

const connectDb = function () {
  mongoose.set('debug', (env.ENVIRONMENT === 'local'))
  mongoose.connect(env.mongoConnectionString);

  mongoose.connection.on('connected', () => {
    console.log('DB CONNECTED');
  });

  mongoose.connection.on('error', (err) => {
    console.log(`DB CONNECTION ERROR  ${err}`);
    process.exit(0);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('DB DISCONNECTED');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('DB disconnected due to application termination');
      process.exit(0);
    });
  });
};

export default connectDb;
