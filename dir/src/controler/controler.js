"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdate = exports.userdelete = exports.CreateData = exports.getDatabyID = exports.getalldata = void 0;
const repository_1 = require("../Repository/repository");
const getalldata = async (req, reply) => {
    return (0, repository_1.getdata)();
};
exports.getalldata = getalldata;
const getDatabyID = async (req, reply) => {
    const userId = req.params.id;
    let data = await (0, repository_1.getalldatabyUID)(userId);
    if (data) {
        reply.send({
            code: 200,
            message: "success",
            data: data,
        });
    }
    else {
        reply.send({
            code: 400,
            message: "failed",
            data: "user not found",
        });
    }
};
exports.getDatabyID = getDatabyID;
const CreateData = async (request, reply) => {
    // const userId=request.params.id;
    const user = request.body;
    console.log(user);
    const createData = await (0, repository_1.postdata)(user);
    if (createData) {
        reply.send({
            code: 200,
            message: "Success",
            data: createData,
        });
    }
    else {
        reply.send({
            code: 400,
            message: "Failed",
            data: "Can not create user",
        });
    }
};
exports.CreateData = CreateData;
const userdelete = async (request, reply) => {
    const userId = request.params.id;
    const user = request.body;
    const data = await (0, repository_1.deletedata)(userId, user);
    if (data) {
        reply.send({
            code: 200,
            message: "success",
            data: data,
        });
    }
    else {
        reply.send({
            code: 400,
            message: "failed",
            data: "user not found",
        });
    }
};
exports.userdelete = userdelete;
const UserUpdate = async (request, reply) => {
    const userId = request.params.id;
    const user = request.body;
    const data = await (0, repository_1.updatedata)(userId, user);
    if (data) {
        reply.send({
            code: 200,
            message: "success",
            data: data,
        });
    }
    else {
        reply.send({
            code: 400,
            message: "Failed",
            data: "User Not Found",
        });
    }
};
exports.UserUpdate = UserUpdate;
