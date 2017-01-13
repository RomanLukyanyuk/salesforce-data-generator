import { Router, Response, Request } from 'express';

const apiRouter: Router = Router();

apiRouter.get('/', (request: Request, response: Response) => {
  console.log('/api/');
  response.json({
    text: '', // request.body.text,
    name: '' // request.body.name
  });

});

export { apiRouter }
