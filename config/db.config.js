const mysql=require('mysql');

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database: 'users'
});

connection.connect(function(err){
    if(err) throw err;
    console.log("mysql connected successfully!!!")
})


module.exports={connection}