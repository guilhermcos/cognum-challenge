import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EmployeeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    return await this.prisma.employee.create({
      data: createEmployeeDto,
    });
  }

  async createMany(employees: CreateEmployeeDto[]) {
    return await this.prisma.$transaction(async (tx) => {
      const generatedEmployees = Promise.all(
        employees.map(async (employee) => {
          return await tx.employee.create({
            data: employee,
          });
        }),
      );
      return generatedEmployees;
    });
  }

  async findAll() {
    return await this.prisma.employee.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.employee.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return await this.prisma.employee.update({
      where: {
        id,
      },
      data: updateEmployeeDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.employee.delete({
      where: {
        id,
      },
    });
  }
}
