const express = require('express');
const router = express.Router();

// Get all clients
router.get('/', async (req, res) => {
  try {
    const clients = await req.app.locals.db.collection('clients').find().toArray();  // Query the clients collection
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching clients', error: err });
  }
});

module.exports = router;
