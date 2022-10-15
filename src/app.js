import  express from 'express';
import  { doorAlertRoute } from './routes/alerts-route.js';

const app = express();
const router = express.Router();

app.use('/door/alerts', doorAlertRoute);

export { app };