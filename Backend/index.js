import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRouter from "./Routes/book.route.js";
import userRouter from "./Routes/user.route.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());  // ✅ Add this to parse JSON data

const PORT = process.env.PORT || 4001;
const URI = process.env.MONGODB_URI;

mongoose.connect(URI)
    .then(() => console.log("✅ DB connected..."))
    .catch(err => console.log("❌ MongoDB connection error:", err));

    app.use('/books', bookRouter);
    app.use('/user', userRouter)

app.listen(PORT , '0.0.0.0', () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
