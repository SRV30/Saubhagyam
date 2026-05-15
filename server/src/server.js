const express = require('express');
const cors = require('cors');
const env = require('./config/env');
const routes = require('./routes');
const connectDb = require('./db/connect');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(
  cors({
    origin: env.clientUrl || env.clientUrlDev,
    credentials: true,
  })
);
app.use(express.json());

app.use('/api', routes);
app.use(errorHandler);

connectDb()
  .then(() => {
    app.listen(env.port, () => {
      console.log(`Server listening on port ${env.port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to database', error.message);
    process.exit(1);
  });
