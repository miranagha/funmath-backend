
const express = require('express');
const moongo = require('mongoose');

const bodyParser = require('body-parser');
 
const user= require('./models/user');


moongo.connect('mongodb+srv://magha001:Miran@123@cluster0.mc3q2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    ,{ useNewUrlParser: true,useUnifiedTopology: true  }  
    );  
    const db = moongo.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("connected")
    });

const app = express();

app.use(express.json())

app.post('/signup', async(req,res)=>{

    const newUser=new user({
        nickname:req.body.nickname,
        email:req.body.email,
         
    });

    newUser.save()
    .then((result)=>{
        if(result) 
        res.send(result)
    })
    .catch((err)=>res.status(400).send(err))
   
})
app.post('/login', async(req,res)=>{
    
 
     await user.findOne({
         nickname:req.body.nickname
     }).then((result)=>{
        if(result) 
        res.send(result)
        else
        res.status(201).send("User not found")
    })
     .catch((err)=>res.status(400).send(err))
   
})


app.listen(process.env.PORT||5000,()=>console.log("server running"))
 