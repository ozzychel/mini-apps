const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const morgan = require('morgan');
const parser = require('body-parser')

app.listen(port, ()=>{console.log(`App listening at http://localhost:${port}`)});
app.use(morgan('dev'));
app.use(parser.urlencoded({extended:true}));
app.use(express.static('./client/dist'))

app.post('/api', (req,res)=>{
  console.log(req.body)
  res.status(200).send('ok')
})

app.get('/api', (req,res)=>{
  // console.log(req.query)
  res.status(200).send('ok')
})

