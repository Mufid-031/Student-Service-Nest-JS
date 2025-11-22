import { Module } from '@nestjs/common';
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

export const jwtSecret = 'siakad-secret';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [StudentService],
  controllers: [StudentController],
})
export class StudentModule {}
