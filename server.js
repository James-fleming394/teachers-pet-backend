const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const db = require("./db");
const routes = require("./routes/Routes");

const app = express();
const PORT = process.env.PORT || 7006;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.json({ message: "Server working"})
});

app.use('/api', routes);

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});