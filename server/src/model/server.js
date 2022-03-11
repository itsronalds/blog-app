import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import cors from 'cors';

import authRoute from '../route/auth';
import postRoute from '../route/private/post';
import profileRoute from '../route/private/profile';

class Server {
  constructor() {
    this.dotenv = dotenv.config();

    this.server = express();
    this.port = process.env.PORT || process.env.SERVER_PORT;

    this.cloudinary = require('../config/cloudinary');
  }

  middlewares() {
    this.server.use(morgan('dev'));

    this.server.use(
      cors({
        origin: process.env.SERVER_HOST,
        credentials: true,
      })
    );
    this.server.use(cookieParser());
    this.server.use(fileUpload());

    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(express.json());
  }

  routes() {
    this.server.use('/api/auth', authRoute);
    this.server.use('/api/post', postRoute);
    this.server.use('/api/profile', profileRoute);
  }

  execute() {
    this.middlewares();
    this.routes();

    this.server.listen(this.port, () => console.log(`SERVER ON PORT: ${this.port}`));
  }
}

export default Server;
