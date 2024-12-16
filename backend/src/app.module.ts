import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CoursesModule } from './courses/courses.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user/schema/user.schema';


@Module({
  imports: [UserModule, CoursesModule,MongooseModule.forRoot('mongodb://127.0.0.1.27017',{dbName:'SkillTrove'}),MongooseModule.forFeature([{
    name: 'User',
    schema:UserSchema
  }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
