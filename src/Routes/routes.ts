import {
  getalldata,
  getDatabyID,
  CreateData,
  userdelete,
  UserUpdate,
} from "../controler/controler";

export const appRoutes = (app: any) => {
  app.get("/", getalldata);
  app.get("/user/:id", getDatabyID);
  app.post("/user", CreateData);
  app.delete("/user/:id", userdelete);
  app.put("/user/:id", UserUpdate);
};
