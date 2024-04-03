const express = require('express');
const app = express();
const path = require('path');

app.use('/', (req,res,next) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;