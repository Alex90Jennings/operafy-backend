import express, { Request, Response } from "express";
import { createUserHandler } from "../controllers/user";
import validateResource from "../middleware/validateResource";
import { createUserSchema } from "../schema/user";

const router = express.Router()

router.post('/', validateResource(createUserSchema), createUserHandler)

export default router