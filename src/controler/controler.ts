import {
  getdata,
  getalldatabyUID,
  postdata,
  deletedata,
  updatedata,
} from "../Repository/repository";
import { users } from "../models/user";

export const getalldata = async (req: any, reply: any) => {
  return getdata();
};

export const getDatabyID = async (req: any, reply: any) => {
  const userId: number = req.params.id;

  let data = await getalldatabyUID(userId);
  if (data) {
    reply.send({
      code: 200,
      message: "success",
      data: data,
    });
  } else {
    reply.send({
      code: 400,
      message: "failed",
      data: "user not found",
    });
  }
};

export const CreateData = async (request: any, reply: any) => {
  // const userId=request.params.id;
  const user = request.body;
  console.log(user);

  const createData = await postdata(user);
  if (createData) {
    reply.send({
      code: 200,
      message: "Success",
      data: createData,
    });
  } else {
    reply.send({
      code: 400,
      message: "Failed",
      data: "Can not create user",
    });
  }
};

export const userdelete = async (request: any, reply: any) => {
  const userId = request.params.id;
  const user = request.body;
  const data = await deletedata(userId, user);
  if (data) {
    reply.send({
      code: 200,
      message: "success",
      data: data,
    });
  } else {
    reply.send({
      code: 400,
      message: "failed",
      data: "user not found",
    });
  }
};
export const UserUpdate = async (request: any, reply: any) => {
  const userId = request.params.id;
  const user = request.body;
  const data = await updatedata(userId, user);
  if (data) {
    reply.send({
      code: 200,
      message: "success",
      data: data,
    });
  } else {
    reply.send({
      code: 400,
      message: "Failed",
      data: "User Not Found",
    });
  }
};
