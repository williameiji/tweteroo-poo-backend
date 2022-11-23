import { Router } from "express";
import { tweetsRouter } from "./tweetsRouter.js";

const router = Router();

router.use(tweetsRouter);

export default router;
