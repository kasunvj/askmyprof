const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const LetterRequest = require('../models/LetterRequest');
const User = require('../models/User');
const { auth, isStudent, isTeacher } = require('../middleware/auth');

// Get all teachers (for dropdown)
router.get('/teachers', auth, async (req, res) => {
  try {
    const teachers = await User.find({ role: 'teacher' })
      .select('displayName username')
      .sort({ displayName: 1 });

    res.json(teachers);
  } catch (error) {
    console.error('Error fetching teachers:', error);
    res.status(500).json({ message: 'Error fetching teachers' });
  }
});

// Create a letter request (student only)
router.post(
  '/',
  [
    auth,
    isStudent,
    body('teacherId').notEmpty().withMessage('Teacher is required'),
    body('message').optional().trim()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { teacherId, message } = req.body;

      // Verify teacher exists
      const teacher = await User.findById(teacherId);
      if (!teacher || teacher.role !== 'teacher') {
        return res.status(400).json({ message: 'Invalid teacher selected' });
      }

      // Create letter request
      const letterRequest = new LetterRequest({
        student: req.userId,
        teacher: teacherId,
        message
      });

      await letterRequest.save();

      const populatedRequest = await LetterRequest.findById(letterRequest._id)
        .populate('student', 'username displayName email')
        .populate('teacher', 'username displayName');

      res.status(201).json({
        message: 'Letter request created successfully',
        request: populatedRequest
      });
    } catch (error) {
      console.error('Error creating letter request:', error);
      res.status(500).json({ message: 'Error creating letter request' });
    }
  }
);

// Get all requests for current user
router.get('/my-requests', auth, async (req, res) => {
  try {
    let query = {};

    if (req.user.role === 'student') {
      query.student = req.userId;
    } else if (req.user.role === 'teacher') {
      query.teacher = req.userId;
    }

    const requests = await LetterRequest.find(query)
      .populate('student', 'username displayName email')
      .populate('teacher', 'username displayName')
      .sort({ createdAt: -1 });

    res.json(requests);
  } catch (error) {
    console.error('Error fetching requests:', error);
    res.status(500).json({ message: 'Error fetching requests' });
  }
});

// Update request status (teacher only)
router.patch(
  '/:id/status',
  [
    auth,
    isTeacher,
    body('status').isIn(['approved', 'rejected']).withMessage('Status must be approved or rejected')
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { status } = req.body;
      const request = await LetterRequest.findOne({
        _id: req.params.id,
        teacher: req.userId
      });

      if (!request) {
        return res.status(404).json({ message: 'Request not found' });
      }

      request.status = status;
      await request.save();

      const populatedRequest = await LetterRequest.findById(request._id)
        .populate('student', 'username displayName email')
        .populate('teacher', 'username displayName');

      res.json({
        message: 'Request status updated successfully',
        request: populatedRequest
      });
    } catch (error) {
      console.error('Error updating request status:', error);
      res.status(500).json({ message: 'Error updating request status' });
    }
  }
);

module.exports = router;
