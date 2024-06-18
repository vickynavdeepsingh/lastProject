const express= require('express');
const app=express();
const port=process.env.PORT || 3000;
const path=require('path')
const mysqlConnection= require('./config/db.config');
const mongoConn=require('./config/db.mongo')




// set the view engine to ejs
//app.set('view engine', 'ejs');
//app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get('/about',(req,res)=>{
    res.render("pages/index")
})







app.listen(port,()=>{
    console.log(`server is running on https://localhost ${port}`)
})