import { app } from './app.js';
import { enviroments } from "./configs/enviroments.js";

app.listen(enviroments.port, () => {
  console.log(`App running at port ${enviroments.port}`);
});