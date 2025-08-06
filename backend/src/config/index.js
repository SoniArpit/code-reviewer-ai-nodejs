import dotenv from "dotenv";
dotenv.config();

export const config = {
  geminiKey: process.env.GOOGLE_GEMINI_KEY,
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  // add other env vars here
};
