import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to env file');
}

client = new MongoClient(uri, options);
clientPromise = client.connect();

// Export the clientPromise for MongoDB
export { clientPromise };

// Modified connectDB function
const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return true;
  }

  try {
    await clientPromise; // Wait for the MongoDB client to connect
    console.log('MongoDB connected');
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default connectDB;
