import { Module } from '@nestjs/common';
import { StudentsService } from './provider/students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { StudentProfile } from '../student-profiles/entities/student-profile.entity';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService],
  imports: [TypeOrmModule.forFeature([Student, StudentProfile])],
})
export class StudentsModule {}
