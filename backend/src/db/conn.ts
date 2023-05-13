import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB à l'écoute");
  } catch (err) {
    if (err instanceof Error) console.error(err.message);
    process.exit(1);
  }
};
