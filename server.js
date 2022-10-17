const express = require('express');
const dotenv = require('dotenv');
//const logger = require('./middleware/logger');  this was just an example
const morgan = require('morgan');
const connectDB = require('./config/db.js');
const colors = require('colors');
const errorHandler = require('./middleware/error');

//Load environment variables
dotenv.config({ path: './config/config.env' });

//Connect to database
connectDB();

//Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

//Body Parser
app.use(express.json());

//Setting up example middleware creating hello data on a req/res event
/* const logger = (req, res, next) => {
  req.hello = 'Hello World'; //Creating this variable gives you access to it in your routes
  console.log('Middleware Ran');
  //All middleware requires next(), which instructs the middleware to move on
  next();
}; */

//this was to demo middleware
//app.use(logger);

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Mount routers
app.use('/api/v1/bootcamps', bootcamps); //connects the router app.use with the bootcamps const above.

app.use(errorHandler); //has to be here or it won't get picked up??

const PORT = process.env.PORT || 5001;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //close server and exit process
  server.close(() => process.exit(1));
});

//hello
