import express from "express";
const router = express.Router();

import { signin, signup, adminPage, deleteUser, getSavedPosts, savePost } from "../controllers/user.js";
import auth from "../middleware/auth.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/adminPage", adminPage);
router.get("/getSavedPosts/:id", getSavedPosts);
router.put("/savePost", savePost);
router.delete('/adminPage/:id', auth, deleteUser);

export default router;