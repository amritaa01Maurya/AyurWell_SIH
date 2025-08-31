const DoshaCategory = require('../models/DoshaCategory');

/**
 * @desc    Get all Dosha categories
 * @route   GET /api/doshas
 * @access  Public
 */
const getAllDoshas = async (req, res) => {
    try {
        const doshas = await DoshaCategory.find({});
        res.json({ success: true, doshas });
    } catch (error) {
        console.error('Error fetching doshas:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

/**
 * @desc    Get a single Dosha category by its name (e.g., Vata)
 * @route   GET /api/doshas/:name
 * @access  Public
 */
const getDoshaById = async (req, res) => {
  try {
    const dosha = await DoshaCategory.findById(req.params.id);
    if (!dosha) {
      return res.status(404).json({ message: 'Dosha not found' });
    }
    res.json(dosha);
  } catch (err) {
    console.error(`Error in getDoshaById for ID ${req.params.id}:`, err.message);
    // Handle cases where the ID format is invalid
    if (err.kind === 'ObjectId') {
        return res.status(404).json({ message: 'Dosha not found' });
    }
    res.status(500).send('Server Error');
  }
};

module.exports = {
    getAllDoshas,
    getDoshaById,
};
