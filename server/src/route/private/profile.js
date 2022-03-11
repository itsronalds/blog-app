import express from 'express';
const router = express();

import { getUserProfileController, updateUserProfileController } from '../../controller/profile';
import { sessionVerify } from '../../middleware/auth';

import validate from '../../validation/validate';
import updateProfileValidator from '../../validation/profile';

router.get('/get-data', sessionVerify, getUserProfileController);

router.patch(
  '/update',
  sessionVerify,
  updateProfileValidator(),
  validate,
  updateUserProfileController
);

export default router;
