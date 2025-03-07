const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const connectDb = require('./config/mongoose');

// MongoDb connection
connectDb();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const optionsCors = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(optionsCors));

// Routes
app.use('/api/v1/skills', require('./routes/skill.route'));

// PORT and Listening to the server
const PORT = process.env.PORT;
const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }catch (error) {
        console.error(`Error in starting the server: ${error.message}`);
    }
}
start();