import { Router } from 'express';
import { register, login } from '../controllers/authController.js';
import { validateRegisterinput } from '../middleware/validationMiddleware.js';

const router = Router();

router.post('/register', validateRegisterinput, register);
router.post('/login', login);

export default router;
