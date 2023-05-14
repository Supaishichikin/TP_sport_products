import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import { connectDB, User } from "./db/conn";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const port = 8030;
const app = express();
const corsOptions = { origin: "http://localhost:3000" };
app.use(cors(corsOptions));
app.use(express.json());
connectDB();

function generateTokens(username: string) {
  const accessToken = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });
  const refreshToken = jwt.sign({ username }, 'refreshSecretKey', { expiresIn: '7d' });

  return { accessToken, refreshToken };
}


app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});

app.post('/register', async (req, res) => {
  const { username, password, first_name, last_name, phone, email } = req.body;

  try { 
    const hashedPassword = await bcrypt.hash(password, 10);

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

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const { accessToken, refreshToken } = generateTokens(username);

    res.json({ accessToken, refreshToken });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/refresh-token', (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ error: 'Refresh token not provided' });
  }

  try {

    const decoded = jwt.verify(refreshToken, 'refreshSecretKey');

    const accessToken = jwt.sign({ username: decoded.username }, 'secretKey', { expiresIn: '1h' });

    res.json({ accessToken });
  } catch (error) {
    console.error('Error refreshing token:', error);
    res.status(401).json({ error: 'Invalid refresh token' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
