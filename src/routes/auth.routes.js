import { Router } from "express";
import VerifyInput from "../middleware/validate.input.js";
import * as authCtrl from '../controller/auth.controller.js';
import path from "path";

const router = Router();

router.post('/login', VerifyInput, authCtrl.logIn);
 
export default router;