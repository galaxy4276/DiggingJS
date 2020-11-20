export const getBuyAPI = (req, res, next) => {
  res.send('<h1>buy API</h1>');
  res.end();
  next();
};

export const getRefundAPI = (req, res, next) => {
  res.send('<h1>Refund API</h1>');
  res.end();
  next();
};