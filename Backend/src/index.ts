// src/index.ts
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import http from 'http'



// #region Setup
const app = express();
const PORT = 3000;

dotenv.config();
const MONGO_URL_LOCAL = process.env.MONGO_URL_LOCAL

app.use(cors({
  credentials: true
}))
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())
// #endregion


const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});


// Mongoose
mongoose.Promise = Promise;
if (MONGO_URL_LOCAL) {
  mongoose.connect(MONGO_URL_LOCAL);
  mongoose.connection.on('error', (error: Error) => {
    console.log(error)
})
} else {
  console.error('MongoDB URL is undefined. Connection not established.');
}

// adding router
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is your Express app with TypeScript!');
});