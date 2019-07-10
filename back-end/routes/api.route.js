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

router.get('/users', (req, res) => {
    User.find((err, data) => {
        if(err) {
            res.status(404).send("No users found");
        } else {
            res.status(200).send(data);
        }
    })
});

module.exports = router;