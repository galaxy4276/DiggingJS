export const getDocumentation = (req, res, next) => {
  res.send('<h1>API Documentation</h1>');
  res.end();
  next();
};