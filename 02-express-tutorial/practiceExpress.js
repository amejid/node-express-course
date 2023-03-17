const express = require('express');
const { consoleLog } = require('./practice-middleware');

const app = express();

app.use(consoleLog);

app.use(express.static('./new-public'));

app.get('/sample', (req, res) => {
  res.status(200).send('This is working.');
});

const port = 3000;
app.listen(port, () => console.log(`Server on ${port}`));
