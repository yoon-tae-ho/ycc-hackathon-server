import cors from "cors";

export const corsMiddleware = cors({
  origin: process.env.CORS_URL,
  optionsSuccessStatus: 200,
  credentials: true,
});
