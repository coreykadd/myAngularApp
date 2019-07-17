const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    username: String,
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    age: Number,
    phoneNumber: String,
    address: {
        address1: String,
        address2: String,
        country: String,
        city: String,
    }
});

module.exports = mongoose.model('User', userSchema, 'users');