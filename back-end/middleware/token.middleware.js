require('../config/config');
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    console.log(req);
    if (!req.headers.authorization) {
        return res.status(403).send('Unauthorized request');
    } 
    const token = req.headers.authorization.split(' ')[1];
    if (token === null) {
        return res.status(403).send('Unauthorized request');
    } else {
        const payload = jwt.verify(token, CONFIG.jwt);
        req.userId = payload.subject;
        next();
    }
}
module.exports.verifyToken = verifyToken;