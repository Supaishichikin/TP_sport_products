import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

// Connexion à la base de données
import { connectDB } from './db/conn';

const port = 8030;
const app = express();
const cors = require('cors');
const corsOptions = {origin: 'http://localhost:3000'}
app.use(cors(corsOptions))

connectDB();

app.get('/', (req: Request, res: Response) => {
   res.json({message:'Hello World!'});
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
