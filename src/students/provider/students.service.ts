import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from '../dto/create-student.dto';
import { Student } from '../entities/student.entity';
import { Repository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';
import { StudentProfile } from '../../student-profiles/entities/student-profile.entity';
import { CreateStudentProfileDto } from '../../student-profiles/dto/create-student-profile.dto';


@Injectable()
export class StudentsService {

  constructor(
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,

    @InjectRepository(StudentProfile)
    private profileRepo: Repository<StudentProfile>
  ) { }

  async create(createStudentDto: CreateStudentDto) {
    const student = this.studentRepo.create(createStudentDto);

    return this.studentRepo.save(student);
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
