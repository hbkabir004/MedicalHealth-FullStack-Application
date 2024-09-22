const express = require('express');
const router = express.Router();

// Get all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await req.app.locals.db.collection('doctors').find().toArray();
    res.json(doctors);
  } catch (err) {
    console.error('Error fetching doctors:', err);  // Log the actual error
    res.status(500).json({ message: 'Error fetching doctors', error: err });
  }
});

module.exports = router;
