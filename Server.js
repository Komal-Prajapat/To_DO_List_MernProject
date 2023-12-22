import mongoose from 'mongoose';
import express from 'express';
import bodyparser from 'express';
import contactRouter from './routes/contact.js';
// import { findById } from 'moongose/models/user_model.js';
const app = express()

app.use(bodyparser.json());
mongoose.connect(
    "mongodb+srv://komalprajapat267:1SqXaaRyOH1STqSt@komal.fjcbbzw.mongodb.net/",{
    dbName:'Contact_Keeper'
}).then(()=>console.log("********* connect ***********"));

//contact Router
app.use('/api',contactRouter);

app.get('/',(req,res)=>{
res.json({message:'This is Home Page'})
})

const port = 9000;
app.listen(port,  ()=>{
    console.log(" ********** Server is created ************* ");
   
})