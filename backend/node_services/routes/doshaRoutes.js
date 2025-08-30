const express = require('express');
const router = express.Router();
const DoshaCategory = require('../models/doshaCategory');

// @route   GET /api/dosha
// @desc    Get all Dosha categories
// @access  Public
router.get('/', async (req, res) => {
  try {
    const doshas = await DoshaCategory.find();
    res.json(doshas);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/dosha/:id
// @desc    Get a specific Dosha category by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const dosha = await DoshaCategory.findById(req.params.id);
    if (!dosha) {
      return res.status(404).json({ msg: 'Dosha not found' });
    }
    res.json(dosha);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Dosha not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
