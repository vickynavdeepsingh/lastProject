const express= require('express');
const app=express();
const port=process.env.PORT || 3000;
const path=require('path')
const bodyParser=require('body-parser')
const cors=require('cors')
const route=require('./controllers/auth.controller')

app.use(cors())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))


/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get('/about',(req,res)=>{
    res.render("pages/index")
})





app.use('/', route);

app.listen(port,()=>{
    console.log(`server is running on https://localhost ${port}`)
})