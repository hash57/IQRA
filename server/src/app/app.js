const express = require('express');
const app = express();
const path = require('path');

// Parse JSON request bodies
app.use(express.json());

// CORS Handling
const cors = require('cors');
const corsOptions = {
    origin:'http://localhost:5200', 
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// App Routings
const v1Routes = require('../routes/v1');
app.use('/api/v1', v1Routes);
 
// Static Resources Sending
app.use('/', (req,res,next) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;