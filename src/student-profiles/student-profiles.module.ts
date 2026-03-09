import { Module } from '@nestjs/common';
import { StudentProfilesService } from './provider/student-profiles.service';
import { StudentProfilesController } from './student-profiles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentProfile } from './entities/student-profile.entity';

@Module({
  controllers: [StudentProfilesController],
  providers: [StudentProfilesService],
  imports:[TypeOrmModule.forFeature([StudentProfile])]
})
export class StudentProfilesModule {}
