const express = require('express');
const router = express.Router();

// Get all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await req.app.locals.db.collection('doctors').find().toArray();  // Query the doctors collection
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching doctors', error: err });
  }
});

module.exports = router;
