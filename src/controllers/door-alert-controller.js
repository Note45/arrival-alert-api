import  fs from 'fs';
import  alertData from '../data/door-alerts.json' assert { type: "json" };
import { nanoid } from 'nanoid';
import { InsideHomeAlertsController } from './inside-home-controller.js';
import { baseAlerts } from '../utils/baseAlerts.js';
import axios from 'axios';
import { enviroments } from '../configs/enviroments.js';
import { baseAlertSounds } from '../utils/baseAlertSounds.js';

export class DoorAlertsController {
  constructor() {
    this.insideHomeController = new InsideHomeAlertsController();
    this.fetch = axios.create({
      baseURL: enviroments.doorControllerBaseUrl
    })
  }

  async createNewAlert(req, res, next) {
    const name = req.query.name;
  
    const newAction = {
      'id': nanoid(),
      'name': name,
    }
  
    alertData.push(newAction);
  
    fs.writeFileSync('src/data/door-alerts.json', JSON.stringify(alertData));

    if (name === baseAlerts.ARRIVE_DOOR) {
      await this.insideHomeController.turnOnAlertLight();
    }

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

  async playDoorSound(req, res, next) {
    const selectedSound = baseAlertSounds[req.body.selectedSound];

    try {
      await this.fetch.get('/sound', {
        data: {
          selectedSound
        }
      });
    } catch (error) {
      console.log('Error when try o request to play alert sound', error);
    }

    res.status(201).send();
  };
}

