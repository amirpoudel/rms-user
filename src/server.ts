import dotenv from 'dotenv';
dotenv.config({path:'./.env'});

import app from './app';
import { MongoDBConfig } from './config/mongodb.config';
MongoDBConfig.connect();





const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
 
  console.log(`Server is running at Port ${PORT}`);
});
