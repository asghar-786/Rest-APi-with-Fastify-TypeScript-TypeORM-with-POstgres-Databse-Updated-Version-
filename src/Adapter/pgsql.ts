import { DataSource } from "typeorm";
import { users } from "../models/user";
import { error } from "console";

const appdatasource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Asghar@123",
  database: "crudapi",
  entities: [users],
});
appdatasource
  .initialize()
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log(error);
  });

export { appdatasource };
