'use strict';

const express = require('express');

const PORT = 8090;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('*** azure devops-aks-5.0 ***\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Click me to display Date and Time.</button>
