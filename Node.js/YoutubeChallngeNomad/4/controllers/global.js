export const getJoin = (req, res, next) => {
  res.send('<h1>Join</h1>');
  res.end();
  next();
};

export const getLogin = (req, res, next) => {
  res.send('<h1>Login</h1>');
  res.end();
  next();
};

export const getConfirmAccount = (req, res, next) => {
  res.send('<h1>Confirm Account</h1>');
  res.end();
  next();
};

export const getHome = (req, res, next) => {
  res.send('<h1>Home</h1>');
  res.end();
  next();
};