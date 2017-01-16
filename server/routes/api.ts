import { Router, Response, Request } from 'express';

const apiRouter: Router = Router();

apiRouter.get('/', (request: Request, response: Response) => {
  response.json({});
});

export { apiRouter }
