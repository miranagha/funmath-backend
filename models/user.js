const mongoose=require('mongoose')


const owneruserschema=mongoose.Schema({
    nickname:{
         type:String,
        required:true
    },
    email:{
        type:String,
        required:false,
        
    },
   
} 

);

module.exports=mongoose.model("user",owneruserschema, 'user');