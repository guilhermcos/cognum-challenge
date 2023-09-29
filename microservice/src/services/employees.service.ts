import EmployeeRepository from "../repositories/employees.repositories";

export default class EmployeeService {
  private readonly employeeRepository;
  constructor() {
    this.employeeRepository = new EmployeeRepository();
  }

  async findUsersByIdList(ids: number[]) {
    return await this.employeeRepository.findUsersByIdList(ids);
  }
}
