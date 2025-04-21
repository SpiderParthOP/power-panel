const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Power Panel Backend Running ✅');
});

app.listen(port, () => {
  console.log(`Backend live at http://localhost:${port}`);
});
