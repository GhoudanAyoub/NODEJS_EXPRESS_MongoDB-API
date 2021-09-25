const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const connectDB = require('./config/db');


app.use(bodyParser.json());
app.use(cors());

// Load Config

dotenv.config({ path: './config/config.env' })
connectDB();


// Routes
app.use('/', require('./routes/index'));

app.listen(3000, "127.0.0.1");



