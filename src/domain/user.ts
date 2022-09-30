import  UserModel, { User } from "../models/user";

export function createUser(input: Partial<User>){
    return UserModel.create(input)
}