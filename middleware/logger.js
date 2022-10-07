const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
  );
  //All middleware requires next(), which instructs the middleware to move on
  next();
};

module.exports = logger;
