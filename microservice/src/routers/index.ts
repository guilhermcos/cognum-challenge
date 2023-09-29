import { Router } from "express";
import notificationRouter from "./notifications.routes";

const router = Router();

router.use(notificationRouter);

export default router;
