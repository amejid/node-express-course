exports.consoleLog = (req, res, next) => {
  console.log('Hey you');
  next();
};
