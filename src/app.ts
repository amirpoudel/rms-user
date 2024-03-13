import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';
import { errorHandler } from './utils/handler/errorHandler';

const app = express();


const allowedOrigins = process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : [];
console.log("ALLOWED ORIGINS",allowedOrigins)
const corsOptions = {
  origin: function (origin:any, callback:Function) {
    // Check if the origin is in the allowedOrigins array or if it's undefined (for requests that don't have an origin, like curl requests)
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

// Use CORS middleware with the specified options
app.use(cors(corsOptions));

// console.log("CORS ALLOWED",process.env.CORS_ORIGIN)
// app.use(cors({
//   origin:process.env.CORS_ORIGIN,
//   credentials
// }));

app.use(bodyParser.json());
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())




app.use(errorHandler);





export default app;