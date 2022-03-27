import express from 'express';

import { getPosts, getPostsBySearch, getReportedPosts, getPost, createPost, updatePost, likePost, commentPost, deleteComment, deletePost, reportPost, postGreenStatus } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/reportedPosts', getReportedPosts);
router.get('/:id', getPost);

router.post('/', auth,  createPost);
router.patch('/:id', auth, updatePost);
router.put('/:id', auth, reportPost);
router.put('/postsList/:id', auth, postGreenStatus);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.post('/:id/commentPost', auth, commentPost);
router.put('/:id/deleteComment', auth, deleteComment);
export default router;