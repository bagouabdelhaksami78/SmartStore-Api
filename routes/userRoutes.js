
const express = require('express');
const { body, query } = require('express-validator');
const { login, register, validateAndProceed } = require('../controllers/userController');
const jwt = require('jsonwebtoken');

const router = express.Router();

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, 'your_secret_key', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Routes
router.post(
    '/register',
    [body('email').isEmail(), body('password').isLength({ min: 5 })],
    validateAndProceed,
    register
);

router.post('/login', [body('email').isEmail(), body('password').notEmpty()], login);

router.get(
    '/users',
    authenticateJWT,
    [query('page').isInt({ min: 1 }), query('limit').isInt({ min: 1 })],
    async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const users = await User.findAndCountAll({ limit, offset });
        res.json({ users, totalPages: Math.ceil(users.count / limit) });
    }
);

module.exports = router;
