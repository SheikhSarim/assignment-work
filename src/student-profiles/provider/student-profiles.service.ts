import { Injectable } from '@nestjs/common';
import { CreateStudentProfileDto } from '../dto/create-student-profile.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentProfile } from '../entities/student-profile.entity';

@Injectable()
export class StudentProfilesService {
  constructor(
    @InjectRepository(StudentProfile)
    private CreateStudentProfileDtoRepository: Repository<StudentProfile>,
  ) { }


  async createProfile(createProfileDto: CreateStudentProfileDto) {
    const profile = this.CreateStudentProfileDtoRepository.create(createProfileDto);
    return this.CreateStudentProfileDtoRepository.save(profile);
  }

  remove(id: number) {
    return `This action removes a #${id} studentProfile`;
  }
}
