'use strict';

const express = require('express');

const PORT = 8090;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('### Welcome All ###\n');
  res.send('azure devops-aks-4.0\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
