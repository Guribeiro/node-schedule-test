import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import routes from './routes';
import './container';

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.use(routes);

app.listen(port, () => console.log(`server is running on port ${port} 🚀`));