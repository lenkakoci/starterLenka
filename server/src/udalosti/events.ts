import { Router } from 'express';
import { dataUdalosti } from './dataUdalosti';

const router = Router();
let idCounter = 3;
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
router.get('/events', (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit.toString(), 10) : undefined;
  if (limit) {
    res.json({ items: data.items.slice(0, limit) });
    return;
  }
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
