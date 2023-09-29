export type NotificationPostRequest = {
  ids: number[];
  message: string;
};

export type employeesResult{
    foundEmployees: {
        id: number;
        name: string;
        role: string;
    }[];
    notFoundIds: number[];
}