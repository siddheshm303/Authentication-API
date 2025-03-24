export const connectDB = async () => {
  try {
    console.log('Mongo URI:', process.env.MONGO_URI); // Debugging step

    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is undefined!');
    }

    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};
