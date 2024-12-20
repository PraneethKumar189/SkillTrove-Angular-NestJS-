import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../schema/user.schema";
import { IUser } from "../interface/User.interface";
import { CreateUserDTO } from "../dto/createUser.dto";
import { promises } from "dns";
import { UpdateUserDTO } from "../dto/updateUser.dto";

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

   async updateuser(reg_no:string,UUD:UpdateUserDTO,):Promise<IUser>{
        const existingUser = await this.userModel.findByIdAndUpdate(reg_no,UUD,{new:true});
           
        if(!existingUser){
            throw new NotFoundException("User not found");
        }

        return existingUser;
       

   }
  
   async getUserById(reg_no:string):Promise<IUser>{
    const  existingUser1=await this.userModel.findById(reg_no).exec();
    if(!existingUser1){
        throw new NotFoundException("User not found ");
    }
    return existingUser1
   }

   async deleteUser(reg_no:string):Promise<IUser>{
    const deleteUser1=await this.userModel.findByIdAndDelete(reg_no);
    if(!deleteUser1){
        throw new NotFoundException("User not found");

    }
    return deleteUser1
   } 
}