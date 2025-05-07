import express from "express";
import { connectDB } from "./config/Db.js";
import dotenv from "dotenv";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import cors from "cors"; // allow frontend to call backend

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "https://enquiry-frontend.vercel.app"],
    credentials: true, // agar cookies ya auth token use kar rahe ho
  })
);
app.use(express.json()); // to parse incoming JSON

// db connection
connectDB();

// routes

app.use("/api", enquiryRoutes);

// server start
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
