import { ApiProperty } from '@nestjs/swagger';

export class StudentEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  nim: string;

  @ApiProperty()
  gender: Gender;

  @ApiProperty()
  major: string;

  @ApiProperty()
  faculty: string;

  @ApiProperty()
  semester: number;

  @ApiProperty()
  address?: string;

  @ApiProperty()
  phone?: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}
