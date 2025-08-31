const express = require('express');
const router = express.Router();
const { getAllDoshas, getDoshaById } = require('../controllers/doshaController');

// @route   /api/doshas

// Get all dosha information
router.get('/', getAllDoshas);

// Get a specific dosha by its name (e.g., /api/doshas/Vata)
router.get('/:id', getDoshaById);

module.exports = router;