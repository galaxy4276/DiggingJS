import express from 'express';
import global from './routes/global';
import course from './routes/course';
import api from './routes/api';
import v1 from './routes/v1';
import v2 from './routes/v2';

const app = express();

app.use('/', global);
app.use('/courses', course);
app.use('/api', api);
app.use('/api/v1', v1);
app.use('/api/v2', v2);

app.listen(8001, () => {
  console.log('Listening!');
});