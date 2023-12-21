import mongoose from 'mongoose'
const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    gmail:{
        type:String,
        require:true,
        unique:true
    },
    phone:{
        type:Number,
        require:true,
        unique:true
    },
    ctype:{ 
        type:Boolean,
        require:true,
       
    }
})

export  const Contact = mongoose.model("Contact " ,contactSchema);
 