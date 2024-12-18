import { Injectable, NotFoundException } from "@nestjs/common";
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
        const newUser= await new this.userModel(createUserDTO)
        return newUser.save()
          
    }

    async getAllUser():Promise<IUser[]>{
        const ifUserExists= await  this.userModel.find()
        if(!ifUserExists)
        {
            throw new NotFoundException("User not found")
        }

        return ifUserExists
    }


}