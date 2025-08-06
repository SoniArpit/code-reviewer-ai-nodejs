import express from "express";
import aiController from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/get-review", async (req, res) =>
  aiController.getReviewController(req, res)
);

export default router;
