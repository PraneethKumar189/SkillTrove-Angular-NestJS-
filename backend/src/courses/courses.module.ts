import { Module } from '@nestjs/common';
import { CoursesController } from './courses/courses.controller';

@Module({
  controllers: [CoursesController]
})
export class CoursesModule {}
