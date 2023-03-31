import { Router } from "express";
import * as authCntl from '../controller/auth.controller.js';

const router = Router();
router.post('/login', authCntl.logIn);
 
export default router;