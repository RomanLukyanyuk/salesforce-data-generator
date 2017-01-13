import { Router, Response, Request } from 'express';

const publicRouter: Router = Router();

publicRouter.get('/', (request: Request, response: Response) => {
  response.sendfile(__dirname + '/dist/client/index.html');
});

export { publicRouter }
