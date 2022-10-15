import  express from 'express';
import  { post, get } from '../controllers/alert-controller.js';

const router = express.Router();

router.get('/', get);
router.post('/', post);

export { router as alertRoute };