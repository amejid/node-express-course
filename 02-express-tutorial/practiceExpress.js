const express = require('express');
const { consoleLog } = require('./practice-middleware');

const app = express();

app.use(consoleLog);

app.use(express.static('./new-public'));

app.get('/sample', (req, res) => {
  res.status(200).send('This is working.');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server on ${PORT}`));
