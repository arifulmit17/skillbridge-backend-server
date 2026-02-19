import express from 'express';
import { AuthController } from './auth.controller';

const router = express.Router();

router.post('/signin',AuthController.CreateUserAuth)

export const AuthRoutes = router;
