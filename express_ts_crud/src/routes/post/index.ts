import express from "express";
import * as post from "./controller/post.controller";

const router = express.Router();

router.post("/", post.create);
router.get("/:id", post.readOne);
router.get("/", post.readAll);
router.put("/:id", post.updateOne);
router.delete("/:id", post.deleteOne);

export default router;