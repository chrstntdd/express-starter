import { NextFunction, Request, Response, Router } from 'express';

export const asyncMiddleware = fn => (
  req: Request,
  res: Response,
  next?: NextFunction
): Promise<void> => Promise.resolve(fn(req, res, next)).catch(next);

export default class MyRouter {
  router: Router;
  path: any;

  /* Define route endpoint here */
  constructor(path = `/api/v1/something`) {
    this.router = Router();
    this.path = path;
    this.init();
  }

  /* Define all route controllers here */
  private async get(
    req: Request,
    res: Response,
    next?: NextFunction
  ): Promise<void> {
    res.status(200).json({ message: 'All is well, friend' });
  }

  /* Attach route controllers to this router instance  */
  private init(): void {
    this.router.get('/', asyncMiddleware(this.get));
  }
}
