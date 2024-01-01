"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appdatasource = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("../models/user");
const appdatasource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Asghar@123",
    database: "crudapi",
    entities: [user_1.users],
});
exports.appdatasource = appdatasource;
appdatasource
    .initialize()
    .then(() => {
    console.log("Database Connected");
})
    .catch((error) => {
    console.log(error);
});
