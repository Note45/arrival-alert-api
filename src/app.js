import  express from 'express';
import  { alertRoute } from './routes/alerts-route.js';

const app = express();
const router = express.Router();

app.use('/alerts', alertRoute);

export { app };