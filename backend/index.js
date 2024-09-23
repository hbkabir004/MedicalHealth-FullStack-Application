const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

// MongoDB connection URI
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        const db = client.db('dotpotitdb');
        
        // Doctors route
        app.get('/doctors', async (req, res) => {
            try {
                const doctors = await db.collection('doctors').find().toArray();
                res.status(200).json(doctors);
            } catch (err) {
                res.status(500).json({ message: 'Error fetching doctors' });
            }
        });

        // Clients route
        app.get('/clients', async (req, res) => {
            try {
                const clients = await db.collection('clients').find().toArray();
                res.status(200).json(clients);
            } catch (err) {
                res.status(500).json({ message: 'Error fetching clients' });
            }
        });

        // Testimonials route
        app.get('/testimonials', async (req, res) => {
            try {
                const testimonials = await db.collection('testimonials').find().toArray();
                res.status(200).json(testimonials);
            } catch (err) {
                res.status(500).json({ message: 'Error fetching testimonials' });
            }
        });

        // Default route
        app.get('/', (req, res) => {
            res.send('API is running');
        });

        const port = process.env.PORT || 5000;
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}

main();
