import * as bodyParser from 'body-parser';
import * as express from 'express';
import expressValidator = require('express-validator');
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as passport from 'passport';

import MyRouter from './routes/MyRouter';

/* import all routers */
export default class Api {
  /* reference to the express instance */
  public express: express.Application;

  /* create the express instance and attach app level middleware and routes */
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  /* get current environment */
  public currentEnv(): string {
    return this.express.get('env');
  }

  /* apply middleware */
  private middleware(): void {
    this.express.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Methods',
        'PUT, GET, POST, DELETE, OPTIONS'
      );
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'
      );
      res.header('Access-Control-Allow-Credentials', 'true');
      next();
    });
    this.express.use(helmet());
    this.express.use(morgan('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(passport.initialize());
    this.express.use(expressValidator());
    this.express.use((err, req, res, next) => {
      console.error(err);
      res.status(err.status || 500).json({
        message: err.message,
        error: err
      });
    });
  }

  /* connect resource routers */
  private routes(): void {
    /* create an instance of the each of our routers */
    const myRouter = new MyRouter();

    /* attach all routers to our express app */
    this.express.use(myRouter.path, myRouter.router);
  }
}
