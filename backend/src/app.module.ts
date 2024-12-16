import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CoursesModule } from './courses/courses.module';
import { Database } from './database/database';

@Module({
  imports: [UserModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService, Database],
})
export class AppModule {}
