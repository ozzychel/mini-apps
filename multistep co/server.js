const express = require('express');
const port = 3000;
const path = require('path');
const morgan = require('morgan');
const app = express();
const parser = require('body-parser');
const db = require('./db/index.js')

app.listen(port, ()=>{console.log(`App listening at http://localhost:${port}`)});
app.use(morgan('dev'));

app.use(express.static('public'))

app.use(parser.urlencoded({ extended: false }))

app.post('/api/users', (req, res) => {
  postPersonalData(req, res, (err, data) => {
    if (err) {
      console.log('ERROR');
      console.log(err);
      res.status(400).send();
    } else {
      console.log('SUCCESS');
      console.log(data);
      res.status(200).send('ok');
    }
  })

})

var postPersonalData = function (req, res, callback) {
  queryStr = `Insert into persondata(name, email, password) values('${req.body.name}','${req.body.email}','${req.body.password}')`

  db.connection.query(queryStr, callback)
}


