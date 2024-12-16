import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../schema/user.schema";
import { IUser } from "../interface/User.interface";
import { CreateUserDTO } from "../dto/createUser.dto";
import { promises } from "dns";

@Injectable()
export class Userservice{
    constructor(@InjectModel('User') private userModel:Model<IUser>){}


    async createUser(createUserDTO:CreateUserDTO):Promise<IUser>{
        

    }
}