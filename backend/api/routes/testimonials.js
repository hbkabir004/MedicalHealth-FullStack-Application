const express = require('express');
const router = express.Router();

// Get all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await req.app.locals.db.collection('testimonials').find().toArray();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching testimonials', error: err });
  }
});

module.exports = router;
