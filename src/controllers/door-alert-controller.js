import  fs from 'fs';
import  alertData from '../data/door-alerts.json' assert { type: "json" };
import { nanoid } from 'nanoid';

export class DoorAlertsController {
  createNewAlert(req, res, next) {
    const name = req.query.name;
  
    const newAction = {
      'id': nanoid(),
      'name': name,
    }
  
    // @ts-ignore
    alertData.push(newAction);
  
    fs.writeFileSync('src/data/door-alerts.json', JSON.stringify(alertData));
  
    res.status(201).send(newAction);
  };
  
  getAllAlerts(req, res, next) {
    res.status(200).send(alertData);
  };

  getFirstAlert(req, res, next) {
    const firtAlert = alertData[0];

    alertData.shift();
    const alertsWithoutFirst = alertData;
    fs.writeFileSync('src/data/door-alerts.json', JSON.stringify(alertsWithoutFirst));

    res.status(200).send(firtAlert);
  };
}

