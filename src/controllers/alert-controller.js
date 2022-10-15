import  fs from 'fs';
import  alertData from '../data/alerts.json' assert { type: "json" };

export class AlertController {
  createNewAlert(req, res, next) {
    const newId = alertData.length;
    const name = req.query.name;
  
    const newAction = {
      'id': newId,
      'name': name,
    }
  
    // @ts-ignore
    alertData.push(newAction);
  
    fs.writeFileSync('src/data/alerts.json', JSON.stringify(alertData));
  
    res.status(201).send(newAction);
  };
  
  getAllAlerts(req, res, next) {
    res.status(200).send(alertData);
  };

  getFirstAlert(req, res, next) {
    const firtAlert = alertData[0];

    alertData.shift();
    const alertsWithoutFirst = alertData;
    fs.writeFileSync('src/data/alerts.json', JSON.stringify(alertsWithoutFirst));

    res.status(200).send(firtAlert);
  };
}

