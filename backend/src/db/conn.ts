const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  phone: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['USER', 'ADMIN'],
    default: 'USER',
  },
});

export const User = mongoose.model('User', userSchema);

const productSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  sport: String,
  price: Number,
  image: Buffer,
});

export const Product = mongoose.model('Product', productSchema);

export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'sports_products' });

    console.log("MongoDB à l'écoute");
  } catch (err) {
    if (err instanceof Error) console.error(err.message);
    process.exit(1);
  }
};
