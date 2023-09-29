import { employeesResult } from "../protocols";
import EmployeeService from "./employees.service";

export class NotificationService {
  private readonly employeeService;
  constructor() {
    this.employeeService = new EmployeeService();
  }

  async sendNotification(ids: number[], message: string) {
    const result = await this.employeeService.findUsersByIdList(ids);
    this.sendEmails(result, message);
    return result;
  }

  async sendEmails(result: employeesResult, message: string) {
    result.notFoundIds.forEach((id) => {
      console.log(`employee referente ao id: ${id} não encontrado`);
    });
    result.foundEmployees.forEach((employee) => {
      console.log(`mensagem: "${message}" enviada ao employee "${employee.name}"`);
    });
  }
}
