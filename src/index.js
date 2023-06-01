import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createTag, getAll, getById, removeTag } from './services/places.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Gis App Api</h1>');
});

app.get('/places', async (req, res) => {
  const places = await getAll();
  res.send(places);
});

app.get('/places/:placeId', async (req, res) => {
  const { placeId } = req.params;
  const place = await getById(placeId);
  res.send(place);
});

app.post('/places', json(), async (req, res) => {
  const place = createTag(req.body);
  res.send(place);
});

app.delete('/places/:placeId', async (req, res) => {
  const { placeId } = req.params;
  await removeTag(placeId);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
