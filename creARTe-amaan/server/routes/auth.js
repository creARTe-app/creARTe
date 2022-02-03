import express from 'express';
import {signupp, login} from '../controllers/auth.js';

const router = express.Router();
router.post('/signupp', signupp);
router.post('/login', login);

export default router;