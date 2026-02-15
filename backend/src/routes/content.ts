import { Router } from "express";
import {
    getContent,
    updateContent
} from "../controllers/content";

const router = Router();

router.get("/", getContent);
router.put("/", updateContent);

export default router;
