import { DeepPartial } from "typeorm";
import { appdatasource } from "../Adapter/pgsql";
import { users } from "../models/user";

const userrepo = appdatasource.getRepository(users);


export const getdata = async () => {
  try {
    const User = await userrepo.find();
    return User;
  } catch (err) {
    console.log(err);
  }
};

export const getalldatabyUID = async (userId: number) => {
  try {
    const User = await userrepo.findOne({ where: { id: userId } });
    console.log(User);
    if (User) {
      return User;
    } else {
      console.log(`User of ${userId} not found`);
      return null;
    }
  } catch (err) {
    console.log(err);
  }
};

export const postdata = async (user: users) => {
  try {
    const newUser = userrepo.create(user);
    const saveUserData = await userrepo.save(newUser);
    console.log(saveUserData);
    return saveUserData;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const deletedata = async (userId: number, user: users) => {
  try {
    const User = await userrepo.findOne({ where: { id: userId } });
    if (!User) {
      console.log("User Not Found");
      return null;
    }
    const deleteUser = await userrepo.remove(User);
    return deleteUser;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const updatedata = async (userId: number,user:users) => {
  try {
    const result = await userrepo.findOne({ where: { id: userId } });
  if(!result){
    console.log("User not Found");
    return null;
  }
    await userrepo.merge(result, user as DeepPartial<users>);
    const saveuser = await userrepo.save(result);
    return saveuser;
  } catch (err) {
    console.log(err);
  }
};
