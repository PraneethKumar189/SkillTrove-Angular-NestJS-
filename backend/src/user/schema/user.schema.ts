import {Schema,Prop,SchemaFactory} from '@nestjs/mongoose'
@Schema()
export class User{
    @Prop()
    reg_no:string;

    @Prop()
    name:string;

    @Prop()
    contactNo:string;

    @Prop()
    email:string;

    @Prop()
    gender:string;

}

export const UserSchema = SchemaFactory.createForClass(User)