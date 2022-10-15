import  express from 'express';
import  { AlertController } from '../controllers/alert-controller.js';

const router = express.Router();
const alertController = new AlertController();

router.get('/', alertController.getAllAlerts);
router.post('/', alertController.createNewAlert);
router.get('/first', alertController.getFirstAlert);

export { router as alertRoute };