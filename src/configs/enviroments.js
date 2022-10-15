import { config } from 'dotenv';

config();

export const enviroments = {
  port: process.env.PORT,
  doorControllerBaseUrl: process.env.DOOR_CONTROLLER_BASE_URL,
  insideHomeControllerBaseUrl: process.env.INSIDE_HOME_CONTROLLER_BASE_URL
}