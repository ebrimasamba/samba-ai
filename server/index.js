import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import "colors";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/posts/", postRoutes);
app.use("/api/v1/dalle/", dalleRoutes);

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_DATABASE_URL);
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server has started at ${process.env.PORT}`.blue.bold);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
