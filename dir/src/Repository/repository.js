"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedata = exports.deletedata = exports.postdata = exports.getalldatabyUID = exports.getdata = void 0;
const pgsql_1 = require("../Adapter/pgsql");
const user_1 = require("../models/user");
const userrepo = pgsql_1.appdatasource.getRepository(user_1.users);
const getdata = async () => {
    try {
        const User = await userrepo.find();
        return User;
    }
    catch (err) {
        console.log(err);
    }
};
exports.getdata = getdata;
const getalldatabyUID = async (userId) => {
    try {
        const User = await userrepo.findOne({ where: { id: userId } });
        console.log(User);
        if (User) {
            return User;
        }
        else {
            console.log(`User of ${userId} not found`);
            return null;
        }
    }
    catch (err) {
        console.log(err);
    }
};
exports.getalldatabyUID = getalldatabyUID;
const postdata = async (user) => {
    try {
        const newUser = userrepo.create(user);
        const saveUserData = await userrepo.save(newUser);
        console.log(saveUserData);
        return saveUserData;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
};
exports.postdata = postdata;
const deletedata = async (userId, user) => {
    try {
        const User = await userrepo.findOne({ where: { id: userId } });
        if (!User) {
            console.log("User Not Found");
            return null;
        }
        const deleteUser = await userrepo.remove(User);
        return deleteUser;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
};
exports.deletedata = deletedata;
const updatedata = async (userId, user) => {
    try {
        const result = await userrepo.findOne({ where: { id: userId } });
        if (!result) {
            console.log("User not Found");
            return null;
        }
        await userrepo.merge(result, user);
        const saveuser = await userrepo.save(result);
        return saveuser;
    }
    catch (err) {
        console.log(err);
    }
};
exports.updatedata = updatedata;
