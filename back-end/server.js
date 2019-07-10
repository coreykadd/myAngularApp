require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 3000;

const api = require('./routes/api.route');

// Connecting to mongodb
const uri = `mongodb+srv://${CONFIG.dbuser}:${CONFIG.dbpassword}@cluster0-2zm9e.mongodb.net/myDB?retryWrites=true&w=majority`;

mongoose.connect(uri, {useNewUrlParser: true}, (err, db) => {
    if(err) {
        console.log('Could not connect to database');
    } else {
        console.log('Connected to database');
    }
});

// App uses
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', api);

// App gets

app.get('/', (req, res) => {
    res.send('Hello');
});

// Listening to server
app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});

