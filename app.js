const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Define middlewares.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes.
const appRouter = require('./routes/index');
app.use('/api',appRouter);

app.listen(PORT,console.log('App is running on port: ' + PORT));