import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB from "./config/db";
import contentRoutes from "./routes/content";
import authRoutes from "./routes/auth";
dotenv.config();
ConnectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/content", contentRoutes);

app.get("/", (_, res) => {
    res.send("API Running");
});
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
