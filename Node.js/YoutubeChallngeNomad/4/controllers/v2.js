export const getRemoveAPI = (req, res, next) => {
  res.send('<h1>Remove API</h1>');
  res.end();
  next();
};

export const getEditAPI = (req, res, next) => {
  res.send('<h1>Edit API</h1>');
  res.end();
  next();
};