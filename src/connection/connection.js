const mysql = require('mysql')

const db =mysql.createConnection({
    user:"root",
    password:"mysecretpassword",
    host:"localhost",
    database:"productos"
})

db.connect((err)=>{
    (err)?console.log(err):console.log('connectada a la db')
})

module.exports = db