import { Type } from 'class-transformer';
import { 
  IsString, 
  IsNotEmpty, 
  IsEmail, 
  Length, 
  IsOptional 
} from 'class-validator';
import { CreateStudentProfileDto } from '../../student-profiles/dto/create-student-profile.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Unique } from 'typeorm';

export class CreateStudentDto {

  @ApiProperty({
    description: 'Full name of the student',
    minLength: 2,
    maxLength: 50,
    example: 'John Doe'
  })
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  name!: string;

  @ApiProperty({
    description: 'Email address of the student',
    example: 'johndoe@example.com'
  })

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @ApiPropertyOptional({
    description: 'Profile information of the student',
    type: () => CreateStudentProfileDto,
    nullable: true
  })
  @IsOptional()
  @Type(() => CreateStudentProfileDto)
  studentProfile?: CreateStudentProfileDto;
}