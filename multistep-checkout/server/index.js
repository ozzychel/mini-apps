const express = require('express');
const port = 3000;
const path = require('path');
const morgan = require('morgan');
const app = express();
const parser = require('body-parser');

app.listen(port, ()=>{console.log(`App listening at http://localhost:${port}`)})
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/', (req,res)=>{res.send('works')})
