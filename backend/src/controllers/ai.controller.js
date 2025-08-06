import aiService from "../services/ai.service.js";

async function getReviewController(req, res) {
  const code = req.body.code;
  if (!code) {
    return res.status(400).send("Prompt is required");
  }
  const response = await aiService.getReviewService(code);
  res.send(response);
}

const aiController = {
  getReviewController,
};

export default aiController;
