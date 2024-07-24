import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('UCA Server is up and running, This was just a test to get a webserver online.');
});

app.listen(80, () => {
  console.log(`[UCA]: Server is running on port 80`);
});
