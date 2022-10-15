import axios from "axios";
import { enviroments } from "../configs/enviroments.js";

export class InsideHomeAlertsController {
  constructor() {
    this.fetch = axios.create({
      baseURL: enviroments.insideHomeControllerBaseUrl
    })
  } 

  async turnOnAlertLight() {
    try {
      await this.fetch.get('/light');
    } catch (error) {
      console.log('Error when try turn on alert light', error);
    }
  }
}

