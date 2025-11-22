import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Gender } from '../entities/student.entity';

export class CreateStudentDto {
  @IsInt()
  userId: number;

  @IsString()
  nim: string;

  @IsString()
  name: string;

  @IsEnum(['MALE', 'FEMALE'])
  gender: Gender;

  @IsString()
  major: string;

  @IsInt()
  semester: number;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  @MinLength(10)
  phone?: string;
}
