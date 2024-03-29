"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = require("./src/Routes/routes");
const app = (0, fastify_1.default)();
const port = 7000;
(0, routes_1.appRoutes)(app);
const start = async () => {
    app.listen({ port }, (err, address) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(`App is lisning on ${port}`);
        }
    });
};
start();
