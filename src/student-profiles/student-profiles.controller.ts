import { Controller} from '@nestjs/common';
import { StudentProfilesService } from './provider/student-profiles.service';


@Controller('student-profiles')
export class StudentProfilesController {
  constructor(private readonly studentProfilesService: StudentProfilesService) {}
}
