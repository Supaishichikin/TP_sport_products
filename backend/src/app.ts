import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import { connectDB, User, Product } from "./db/conn";
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

// USERS AND AUTH
app.post('/register', async (req, res) => {
  const { role, password, first_name, last_name, phone, email } = req.body;

  try { 
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      password: hashedPassword,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      role: role
    });

    await newUser.save();

    res.json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const { accessToken, refreshToken } = generateTokens(email);

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

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/users/:user_id', async (req, res) => {
  const { user_id } = req.params;
  try {
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/users', async (req, res) => {
  const { first_name, last_name, phone, email, password, role } = req.body;
  try {
    const newUser = new User({
      first_name,
      last_name,
      phone,
      email,
      password,
      role,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.put('/users/:user_id', async (req, res) => {
  const { user_id } = req.params;
  const { first_name, last_name, phone, email, password, role } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      user_id,
      {
        first_name,
        last_name,
        phone,
        email,
        password,
        role,
      },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.delete('/users/:user_id', async (req, res) => {
  const { user_id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(user_id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// PRODUCTS

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/product/:products_id', async (req, res) => {
  const { products_id } = req.params;
  try {
    const product = await Product.findById(products_id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


app.post('/product', async (req, res) => {
  const { name, quantity, sport, price, image } = req.body;
  try {
    const newProduct = new Product({
      name,
      quantity,
      sport,
      price,
      image,
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.put('/product/:product_id', async (req, res) => {
  const { product_id } = req.params;
  const { name, quantity, sport, price, image } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      product_id,
      {
        name,
        quantity,
        sport,
        price,
        image,
      },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.delete('/product/:product_id', async (req, res) => {
  const { product_id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(product_id);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product deleted' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
