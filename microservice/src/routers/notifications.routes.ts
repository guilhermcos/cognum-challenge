import { Router } from "express";
import NotificationController from "../controllers/notifications.controller";
import { validateBody } from "../middlewares/validation-middleware";
import { notificationPostSchema } from "../schemas/notifications.schemas";

const notificationController = new NotificationController();

const notificationRouter = Router();

notificationRouter.post(
  "/send-notification",
  validateBody(notificationPostSchema),
  notificationController.sendNotification
);

export default notificationRouter;
