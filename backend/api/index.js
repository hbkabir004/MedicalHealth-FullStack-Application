const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();
app.use(express.json());

const uri = process.env.MONGO_URI;  // Replace with our actual URI

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

// Connect to MongoDB
async function connectDB() {
  try {
    await client.connect();
    db = client.db('dotpotitdb');  // Ensure we're connecting to the correct database
    app.locals.db = db;  // Make the db accessible in the routes
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectDB();

// Define routes
app.use('/api/doctors', require('./routes/doctors'));
app.use('/api/clients', require('./routes/clients'));
app.use('/api/testimonials', require('./routes/testimonials'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Base route
app.get("/", (req, res) => {
  res.send(`API is running on VERCEL !`);
});
