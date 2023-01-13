import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.get("/", (req, res) => {
  res.json("Welcome to Google Cloud");
});

app.listen(port, () => {
  console.log(`app running on http://localhost:${port}`);
});
