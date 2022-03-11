import express from 'express';
const router = express();

import validate from '../../validation/validate';
import uploadPostValidator from '../../validation/post';

import { uploadPostController, getAllPostsController, getOnePost } from '../../controller/post';
import { sessionVerify } from '../../middleware/auth';

router.post('/upload', sessionVerify, uploadPostValidator(), validate, uploadPostController);

router.get('/get-all', sessionVerify, getAllPostsController);

router.get('/:IDPost', sessionVerify, getOnePost);

export default router;
