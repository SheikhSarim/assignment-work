import { IsInt, IsString, IsNotEmpty, Min, Max, Length, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentProfileDto {

  @ApiProperty({
    description: 'Age of the student in years',
    minimum: 1,
    maximum: 120,
    example: 20
  })
  @IsInt()
  @Min(1)
  @Max(120)
  age!: number;

  @ApiProperty({
    description: 'Full address of the student',
    minLength: 5,
    maxLength: 255,
    example: '123 Main Street, Cityville'
  })
  @IsString()
  @IsNotEmpty()
  @Length(5, 255)
  address!: string;

  @ApiProperty({
    description: 'Phone number of the student (digits only, 10-15 characters)',
    pattern: '^[0-9]{10,15}$',
    example: '1234567890'
  })
  @IsString()
  @Matches(/^[0-9]{10,15}$/, {
    message: 'Phone number must contain only digits and be between 10 and 15 characters',
  })
  phone!: string;
}