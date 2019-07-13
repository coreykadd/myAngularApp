require('../config/config');
const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

router.get('/', (req, res) => {
    res.send('This is a blank page');
});

// Users
router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((err, data) => {
        if(err) {
            res.status(400).send({"err: ": err});
        } else {
            res.status(201).send({"data: ": data});
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
            res.status(200).send(doc);
        }
    });
});

router.get('/users', (req, res) => {
    User.find((err, doc) => {
        if(err) {
            res.status(404).send("No users found");
        } else {
            res.status(200).send(doc);
        }
    })
});

module.exports = router;