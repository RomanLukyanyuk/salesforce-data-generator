import * as express from 'express';
import { json, urlencoded } from 'body-parser';
import * as path from 'path';
import { apiRouter } from './routes/api';
import { publicRouter } from './routes/public';

const app: express.Application = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/', publicRouter);
app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, '/../../dist/client')));

if (app.get('env') === 'production') {

  // in production mode run application from dist folder
  app.use(express.static(path.join(__dirname, '/../client')));
}

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next) => {
  let err = new Error('Not Found');
  next(err);
});

// production error handler
// no stacktrace leaked to user
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {

  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message
  });
});

export { app }
