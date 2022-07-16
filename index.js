const express = require('express');
const mailRoute = require('./routes/mailRoute')

const app = express();
const port = 5001;

app.use('/email', mailRoute)

app.listen(port, () => console.log(`Server running port ${port}`))