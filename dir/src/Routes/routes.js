"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const controler_1 = require("../controler/controler");
const appRoutes = (app) => {
    app.get("/", controler_1.getalldata);
    app.get("/user/:id", controler_1.getDatabyID);
    app.post("/user", controler_1.CreateData);
    app.delete("/user/:id", controler_1.userdelete);
    app.put("/user/:id", controler_1.UserUpdate);
};
exports.appRoutes = appRoutes;
