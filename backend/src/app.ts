import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// Connexion à la base de données
import { connectDB, User } from "./db/conn";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const port = 8030;
const app = express();
const corsOptions = { origin: "http://localhost:3000" };
app.use(cors(corsOptions));
app.use(express.json());
connectDB();

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});

app.post('/register', async (req, res) => {
  const { username, password, first_name, last_name, phone, email } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document in MongoDB
    const newUser = new User({
      username: username,
      password: hashedPassword,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone
    });

    await newUser.save();

    res.json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
