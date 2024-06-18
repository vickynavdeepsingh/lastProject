const mongodb=require('mongoose');
 require('dotenv').config()


const mongoConnection= mongodb.connect(process.env.MONGO_URL,{
    // useNewUrlParser:true,
    // useUnifiedTopology: true,
})
.then(()=>{
    console.log("mongodb connected successfully!!")
})
.catch((error)=>{
    console.log("mongo connection error:", error)
})


module.exports={mongoConnection}