const mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'checkout'
})

connection.connect();

// connection.query('SELECT * from persondata', (err,result)=>{
//   if (err) {
//     console.log('DB ERROR')
//   } else {
//     console.log(result)
//   }
// })

module.exports.connection = connection;