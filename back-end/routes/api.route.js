require('../config/config');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/user.model');
const tokenMiddleware = require('../middleware/token.middleware');

router.get('/', (req, res) => {
    res.send('This is a blank page');
});

// Users
router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((err, doc) => {
        if(err) {
            res.status(400).send({"err: ": err});
        } else {
            let payload = {subject: doc._id, role: doc.role};
            let token = jwt.sign(payload, CONFIG.jwt);
            res.status(201).send({doc: doc, token: token});
        }
    });
});

router.post('/login', (req, res) => {
    let userData = req.body;

    User.findOne({email: userData.email}, (err, doc) => {
        if(err) {
            console.log(err);
        } else if (!doc) {
            res.status(401).send('Invalid email');
        } else if (doc.password !== userData.password) {
            res.status(401).send('Invalid password');
        } else {
            let payload = {subject: doc._id, role: doc.role};
            let token = jwt.sign(payload, CONFIG.jwt);
            res.status(200).send({access_token: token, refresh_token: 'null'});
        }
    });
});

router.get('/users', tokenMiddleware.verifyToken, (req, res) => {
    User.find((err, doc) => {
        if(err) {
            res.status(404).send("No users found");
        } else {
            res.status(200).send(doc);
        }
    })
});

module.exports = router;