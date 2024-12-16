import { Document } from "mongoose";

export class IUser extends Document{
    readonly reg_no:string;
    readonly name:string;
    readonly contactNo:string;
    readonly email:string;
    readonly gender:string;

}