/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { StudentService } from './student.service';
import { StudentEntity } from '../entities/student.entity';
import { CreateStudentDto } from '../dto/create-student.dto';
import { UpdateStudentDto } from '../dto/update-student.dto';

@Controller('student')
@ApiTags('student')
@UseGuards(JwtAuthGuard)
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: StudentEntity })
  create(@Body() createDto: CreateStudentDto) {
    return this.studentService.create(createDto);
  }

  @Get()
  @ApiBearerAuth()
  @ApiOkResponse({ type: StudentEntity, isArray: true })
  findAll() {
    return this.studentService.findAll();
  }

  @Get('profile')
  @ApiBearerAuth()
  @ApiOkResponse({ type: StudentEntity })
  profile(@Req() req) {
    return this.studentService.findByUserId(req.user.id);
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: StudentEntity })
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: StudentEntity })
  update(@Param('id') id: string, @Body() updateDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: StudentEntity })
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }
}
