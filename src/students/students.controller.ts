import { Controller ,Post, Body, Delete, Param} from '@nestjs/common';
import { StudentsService } from './provider/students.service';
import { CreateStudentDto } from './dto/create-student.dto';


@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.studentsService.remove(id);
  }
}
