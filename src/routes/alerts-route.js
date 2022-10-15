import  express from 'express';
import  { DoorAlertsController } from '../controllers/door-alert-controller.js';

const router = express.Router();
const doorAlertController = new DoorAlertsController();

router.get('/', doorAlertController.getAllAlerts.bind(doorAlertController));
router.post('/', doorAlertController.createNewAlert.bind(doorAlertController));
router.get('/first', doorAlertController.getFirstAlert.bind(doorAlertController));

export { router as doorAlertRoute };