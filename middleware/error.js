const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  //error.message = err.message; //wtf

  //Log to console for dev
  //console.log(error);
  //console.dir(err);
  console.log(err);
  console.log(err.name); //where does this come from!?!?!
  //console.log(err.kind);
  //console.log(err.stack);

  //Mongoose bad object ID
  if (err.name === 'CastError') {
    const message = `Bootcamp not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  //Mongoose duplicate key error
  if (err.code === 11000) {
    const message = 'Duplicate field value entered for the bootcamp';
    error = new ErrorResponse(message, 400);
  }

  //Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => val.message);
    console.log('Justin');
    console.log(err.errors);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
  });
};

module.exports = errorHandler;
