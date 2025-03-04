const express = require('express');
const app = express();
require('dotenv').config();
const connectDb = require('./config/mongoose');

// MongoDb connection 
connectDb();

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