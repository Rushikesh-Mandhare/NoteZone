const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/getuser');

// Declare JWT secret key
const JWT_SECRET = 'Rushikesh_Mandhare_2705';

// @route   POST /auth/createuser
// @desc    Register a new user
// @access  Public
router.post('/createuser', [
    // Validate name
    body('name').notEmpty().withMessage('Name is required'),

    // Validate email
    body('email').isEmail().withMessage('Invalid email address'),

    // Validate password
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
        // Check if user already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success: false, errors: [{ msg: 'User already exists' }] });
        }

        // Hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Creating a new User instance with hashed password
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        // Saving the new user instance
        await user.save();

        // Generating JWT token
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, JWT_SECRET, (err, token) => {
            if (err) throw err;
            res.json({ success: true, token });
        });

    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).json({ success: false, message: 'Error saving user' });
    }
});

// @route   POST /auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', [
    // Validate email
    body('email').isEmail().withMessage('Invalid email address'),

    // Validate password
    body('password').notEmpty().withMessage('Password is required')
], async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        // Check if user exists
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, errors: [{ msg: 'Invalid Credentials' }] });
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, errors: [{ msg: 'Invalid Credentials' }] });
        }

        // Generating JWT token
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, JWT_SECRET, (err, token) => {
            if (err) throw err;
            res.json({ success: true, token });
        });

    } catch (err) {
        console.error('Error logging in:', err);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

router.post('/getuser', verifyToken, async (req, res) => {
    try {
        // Find the user by ID extracted from the JWT payload
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.json({ success: true, user });
    } catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

module.exports = router;
