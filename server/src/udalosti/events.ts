import { Router } from 'express';
import { dataUdalosti } from './dataUdalosti';

const router = Router();
let idCounter = 2;
const data = dataUdalosti;

router.post('/events', (req, res) => {
  // validace dat !!!
  idCounter += 1;
  data.items.push({
    ...req.body,
    id: idCounter,
  });
  res.send('OK');
});
router.get('/events', (_req, res) => {
  res.json(data);
});

router.get('/events/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const theEvent = data.items.find((x) => x.id === id);
  if (!theEvent) {
    res.status(404).send('Not Found');
  }
  else {
    res.json(theEvent);
  }
});

export default router;
