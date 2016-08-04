const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(__dirname + '/build'));
app.get('/', (res, res) => {
  res.send('./build/index.html');
});
app.listen(PORT, err => {
  if (err) {
    console.error('error starting server', err);
  }  else {
    console.log('server up and running on port', PORT);
  }
});
