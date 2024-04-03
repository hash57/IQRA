const app = require('../src/app/app.js');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('app working on port', port);
});