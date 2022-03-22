import express from "express";
const router = express.Router();

import { signin, signup, adminPage, deleteUser } from "../controllers/user.js";
import auth from "../middleware/auth.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/adminPage", adminPage);
router.delete('/adminPage/:id', auth, deleteUser);

export default router;