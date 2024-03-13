import dotenv from 'dotenv';
dotenv.config({path:'./.env'});

import app from './app';
import  './config/mongodb.config';

import { logger } from './utils/logs/winston';



const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  logger.info(`Server is running at Port ${PORT}`);
  console.log(`Server is running at Port ${PORT}`);
});
