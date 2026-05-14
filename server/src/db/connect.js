const mongoose = require('mongoose');
const env = require('../config/env');

const connectDb = async () => {
  if (!env.mongoUri) throw new Error('MONGODB_URI is required');
  await mongoose.connect(env.mongoUri, { dbName: env.mongoDbName });
  console.log('MongoDB connected');
};

module.exports = connectDb;
