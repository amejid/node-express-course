const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('./public'));

app.all('*', (req, res) => {
  res.status(404).send('404');
});

const port = 5000;
app.listen(port, () => console.log(`Server on ${port}`));
