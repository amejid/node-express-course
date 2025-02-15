require('dotenv').config();
const express = require('express');
const router = require('./routes');

const app = express();
app.use(express.json());

app.use('/api/v1', router);

const port = 5000;
app.listen(port, () => console.log(`Listening on ${port}`));
