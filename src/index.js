import express, { json } from 'express';
import cors from "cors";
import dotenv from "dotenv";
import { createTag, getAll, getById } from "./services/geoTags.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send('<h1>Welcome to Gis App Api</h1>')
})

app.get("./geoTags", async (req, res) => {
  const tags = await getAll();
  res.send(tags);
});

app.get("./geoTags/:tagId", async (req, res) => {
  const { tagId } = req.params;
  const tag = await getById(tagId);
  res.send(tag);
});

app.post("./geoTags", json(), async (req, res) => {
  const tag = createTag(req.body);
  res.send(tag);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
