import  fs from 'fs';
import  { nanoid } from 'nanoid';
import  alertData from '../data/alerts.json' assert { type: "json" };

export const post = (req, res, next) => {
  const name = req.query.name;
  const action = req.query.action;

  const newAction = {
    'id': nanoid(),
    'name': name,
    'action': action,
  }

  // @ts-ignore
  alertData.push(newAction);

  fs.writeFileSync('src/data/alerts.json', JSON.stringify(alertData));

  res.status(201).send(newAction);
};

export const get = (req, res, next) => {
  res.status(200).send(alertData);
};