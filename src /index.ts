import express from "express";
import connectDb from "./database/database";
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
connectDb().then(async () => {
  app.listen(PORT, async () => console.log(`Server running on port ${PORT}`));
});
