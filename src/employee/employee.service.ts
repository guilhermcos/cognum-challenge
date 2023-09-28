import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeRepository } from './employee.repository';
import { RandomUserApiService } from '../random-user-api/random-user-api.service';

@Injectable()
export class EmployeeService {
  constructor(
    private readonly employeeRepository: EmployeeRepository,
    private readonly randomUserApiService: RandomUserApiService,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    return await this.employeeRepository.create(createEmployeeDto);
  }

  async findAll() {
    return await this.employeeRepository.findAll();
  }

  async findOne(id: number) {
    const user = await this.employeeRepository.findOne(id);
    if (!user) throw new NotFoundException('Employee Not Found');
    return user;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    await this.validateExistUser(id);
    return await this.employeeRepository.update(id, updateEmployeeDto);
  }

  async remove(id: number) {
    await this.validateExistUser(id);
    return await this.employeeRepository.remove(id);
  }

  async populate() {
    const users: CreateEmployeeDto[] =
      await this.randomUserApiService.getRandomUsers();
    const generatedEmployees = await this.employeeRepository.createMany(users);
    return generatedEmployees;
  }

  private async validateExistUser(id: number) {
    const user = await this.employeeRepository.findOne(id);
    if (!user) throw new NotFoundException('Employee Not Found');
  }
}
