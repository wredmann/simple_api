const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const UserRoute = require('./app/routes/User');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use('/user', UserRoute)

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database Connected Successfully!!!');
}). catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
})

app.get('/', (req, res) => {
    res.json({"message": "Hello sample api"});
});

app.listen(3000, () => {
    console.log('server is listening on port 3000');
})