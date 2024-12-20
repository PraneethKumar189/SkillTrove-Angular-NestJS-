import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { Userservice } from './services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'User',schema:UserSchema}])],
  controllers: [UserController],
  providers:[Userservice]
})
export class UserModule {}
