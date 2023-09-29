import { prisma } from "../config/database";

export default class EmployeeRepository {
  async findUsersByIdList(ids: number[]) {
    const employees = await prisma.employee.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    const foundUserIds = employees.map((employee) => employee.id);
    const notFoundUserIds = ids.filter((id) => !foundUserIds.includes(id));

    return {
      foundEmployees: employees,
      notFoundIds: notFoundUserIds,
    };
  }
}
