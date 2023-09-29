import Joi from "joi";
import { NotificationPostRequest } from "../protocols";

export const notificationPostSchema = Joi.object<NotificationPostRequest>({
  ids: Joi.array().items(Joi.number()).required(),
  message: Joi.string().required(),
}).unknown(true);
