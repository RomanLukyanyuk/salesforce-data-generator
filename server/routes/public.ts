import { Router, Response, Request } from 'express';
import * as path from 'path';

const publicRouter: Router = Router();

publicRouter.get('', (request: Request, response: Response) => {
  response.sendFile(path.join(__dirname, '/../../client/index.html'));
});

export { publicRouter }
