import fastify from "fastify";
import { appRoutes } from "./src/Routes/routes";
const app = fastify();
const port = 7000;

appRoutes(app);

const start = async () => {
  app.listen({ port }, (err, address) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`App is lisning on ${port}`);
    }
  });
};
start();
