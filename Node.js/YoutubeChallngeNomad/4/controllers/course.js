export const getNew = (req, res, next) => {
  res.send('<h1>New Courses</h1>');
  res.end();
  next();
};

export const getMine = (req, res, next) => {
  res.send('<h1>My Courses</h1>');
  res.end();
  next();
};

export const getCourses = (req, res, next) => {
  res.send('<h1>Courses</h1>');
  res.end();
  next();
};