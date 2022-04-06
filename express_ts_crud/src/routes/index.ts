import express from "express";
import post from "./post";

const router = express();

router.use("/board", post);

export default router;