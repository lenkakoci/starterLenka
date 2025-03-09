import express, { Express, Request, Response, NextFunction } from 'express';
import eventsRouter from './udalosti/events';
import cors from 'cors';
const port = '4000';
const app: Express = express();
console.log('běžím');

console.log('server běží');

// test error endpoint
// app.get('/err', async () => {
//   const x = new Promise((_resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error('záměrně vyvolaná chyba, index, ř.17.'));
//     }, 100);
//   });
//   await x;
// });

// tu jsou middlewary
// importovala jsem default export z events,

// tady se ruší omezení cors
app.use(cors({ credentials: true, origin: true }));
// tento middleware dělá jsony
app.use(express.json());
// nyní když bude url /events, použije instance routeru, která má post, get (events) a get events/:id
app.use('/api', eventsRouter);
// toto je časová známka každého requestu
app.use((_req, _res, next) => {
  console.log('Lenka Time:' + new Date(Date.now()));
  next();
});

app.get('/', (_req, res) => {
  res.json({ ahoj: 1 });
});
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
// Error handling confing
app.use((_req, res) => {
  res.status(404).send('Toto url neexistuje');
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(JSON.stringify(err));
  console.error(err.message);
  console.error(err.stack);
  res.status(500).send('Nějaká chyba, obecný error handler!');
});
