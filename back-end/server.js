const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
const PORT = 3000;

const api = require('./routes/api.route');

app.use(bodyParser.json());

app.use('/api', api);

// Connecting to mongodb
const url = 'mongodb://localhost/myDB';

mongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
    if(err) {
        console.log('Could not connect to database');
    } else {
        console.log('Connected to database');
    }
});

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});

