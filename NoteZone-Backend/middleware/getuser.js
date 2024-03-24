const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Rushikesh_Mandhare_2705';

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access Denied' });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(403).json({ message: 'Invalid Token' });
    }
}

module.exports= verifyToken;