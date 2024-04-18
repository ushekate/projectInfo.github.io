const mysql = require("mysql");

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"form",
    port:"3306"
});

con.connect((err)=>{
    if (err) throw err;
    console.log("mysql connected")
});
module.exports.con = con;