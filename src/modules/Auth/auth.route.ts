import express from 'express';
import { AuthController } from './auth.controller';

const router = express.Router();

router.post('/signup',AuthController.CreateUserAuth)
router.post('/signin',AuthController.LoginAuth)

export const AuthRoutes = router;
