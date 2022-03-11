import express from 'express';
const router = express.Router();

// Validators
import validate from '../validation/validate';
import signupValidator from '../validation/signup';
import loginValidator from '../validation/login';

// Controllers
import { signUpController, logInController, logOutController } from '../controller/auth';

// Utils
import { initialSessionVerify, sessionVerify } from '../middleware/auth';

router.get('/', initialSessionVerify);

router.post('/signup', signupValidator(), validate, signUpController);

router.post('/login', loginValidator(), validate, logInController);

router.get('/logout', logOutController);

export default router;
