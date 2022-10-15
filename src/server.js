import { app } from './app.js';
import { enviroments } from "./configs/enviroments.js";

const init = async () => {
  app.listen(enviroments.port, () => {
    console.log(`App running at port ${enviroments.port}`);
  });;
}

init().catch((error) => {
  console.log('Erro when try run ther server: ', error);
});

