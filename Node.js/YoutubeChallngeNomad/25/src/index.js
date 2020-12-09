import express from 'express';
import request from 'request';
import logger from 'morgan';

const app = express();
app.use(logger('dev'));

app.get('/', (req, res, next) => {
  const { urls } = req.query;

  if (urls) {
    request.get(`http://${urls}`, (err, response) => {
      if (!(response?.statusCode)) {
        return res.send('down');
      }

      if (response.statusCode === 200) {
        return res.send('<h3>up</h3>');
      } else {
        return res.send('<h3>Not 200 but is Ok</h3>');
      }
    });
  }

  if (!urls) {
    res.send('<h1>hello</h1>');
    return res.end();
  }
});


// Codesanbox does not need PORT :)
app.listen(8001,() => console.log(`Listening!`));
