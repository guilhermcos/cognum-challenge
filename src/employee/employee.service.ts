import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeRepository } from './employee.repository';

@Injectable()
export class EmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    return this.employeeRepository.create(createEmployeeDto);
  }

  findAll() {
    return this.employeeRepository.findAll();
  }

  findOne(id: number) {
    return this.employeeRepository.findOne(id);
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeRepository.update(id, updateEmployeeDto);
  }

  remove(id: number) {
    return this.employeeRepository.remove(id);
  }
}
