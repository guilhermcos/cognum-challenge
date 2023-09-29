import { Request, Response } from "express";
import { NotificationService } from "../services/notifications.service";
import { NotificationPostRequest } from "../protocols";

export default class NotificationController {
  private notificationService;
  constructor() {
    this.notificationService = new NotificationService();
    this.sendNotification = this.sendNotification.bind(this);
  }

  async sendNotification(req: Request, res: Response) {
    const { ids, message } = req.body as NotificationPostRequest;
    const result = await this.notificationService.sendNotification(ids, message);
    res.status(200).send("OK");
  }
}
