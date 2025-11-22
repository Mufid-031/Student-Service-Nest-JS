import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { CreateStudentDto } from '../dto/create-student.dto';
import { UpdateStudentDto } from '../dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreateStudentDto) {
    return this.prisma.student.create({ data: createDto });
  }

  findAll() {
    return this.prisma.student.findMany();
  }

  async findOne(id: number) {
    const student = await this.prisma.student.findUnique({ where: { id } });

    if (!student) throw new NotFoundException('Student not found');

    return student;
  }

  async findByUserId(userId: number) {
    return await this.prisma.student.findUnique({ where: { userId } });
  }

  async update(id: number, updateDto: UpdateStudentDto) {
    return this.prisma.student.update({
      where: { id },
      data: updateDto,
    });
  }

  remove(id: number) {
    return this.prisma.student.delete({ where: { id } });
  }
}
