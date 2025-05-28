const express = require('express');
const router = express.Router();
const Routine = require('../models/Routine');
const auth = require('../middleware/auth');

// Get user's routines
router.get('/my-routines', auth, async (req, res) => {
  try {
    const routines = await Routine.find({ user: req.user.id })
      .populate('products.product')
      .sort({ createdAt: -1 });
    res.json(routines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get public routines
router.get('/public', async (req, res) => {
  try {
    const routines = await Routine.find({ isPublic: true })
      .populate('user', 'username')
      .populate('products.product')
      .sort({ createdAt: -1 });
    res.json(routines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single routine
router.get('/:id', async (req, res) => {
  try {
    const routine = await Routine.findById(req.params.id)
      .populate('user', 'username')
      .populate('products.product');
    
    if (!routine) {
      return res.status(404).json({ message: 'Routine not found' });
    }

    // Check if routine is private and user is not the owner
    if (!routine.isPublic && (!req.user || routine.user._id.toString() !== req.user.id)) {
      return res.status(403).json({ message: 'Access denied' });
    }

    res.json(routine);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create routine
router.post('/', auth, async (req, res) => {
  try {
    const routine = new Routine({
      ...req.body,
      user: req.user.id
    });
    const savedRoutine = await routine.save();
    res.status(201).json(savedRoutine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update routine
router.put('/:id', auth, async (req, res) => {
  try {
    const routine = await Routine.findById(req.params.id);
    
    if (!routine) {
      return res.status(404).json({ message: 'Routine not found' });
    }

    // Check if user is the owner
    if (routine.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Access denied' });
    }

    const updatedRoutine = await Routine.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('products.product');

    res.json(updatedRoutine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete routine
router.delete('/:id', auth, async (req, res) => {
  try {
    const routine = await Routine.findById(req.params.id);
    
    if (!routine) {
      return res.status(404).json({ message: 'Routine not found' });
    }

    // Check if user is the owner
    if (routine.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Access denied' });
    }

    await Routine.findByIdAndDelete(req.params.id);
    res.json({ message: 'Routine deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Like/Unlike routine
router.post('/:id/like', auth, async (req, res) => {
  try {
    const routine = await Routine.findById(req.params.id);
    
    if (!routine) {
      return res.status(404).json({ message: 'Routine not found' });
    }

    const likeIndex = routine.likes.indexOf(req.user.id);
    
    if (likeIndex === -1) {
      // Like routine
      routine.likes.push(req.user.id);
    } else {
      // Unlike routine
      routine.likes.splice(likeIndex, 1);
    }

    await routine.save();
    res.json(routine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router; 