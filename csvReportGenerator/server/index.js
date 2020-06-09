const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;

app.listen(port, ()=>{console.log(`App listening on http://localhost:${port}`)});

app.use('/', express.static(path.join(__dirname, '../client/')))

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send()
})