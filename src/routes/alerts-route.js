import  express from 'express';
import  { DoorAlertsController } from '../controllers/door-alert-controller.js';

const router = express.Router();
const doorAlertController = new DoorAlertsController();

router.get('/', doorAlertController.getAllAlerts);
router.post('/', doorAlertController.createNewAlert);
router.get('/first', doorAlertController.getFirstAlert);

export { router as doorAlertRoute };