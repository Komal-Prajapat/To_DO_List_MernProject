import mongoose from 'mongoose';
import express from 'express';
import bodyparser from 'express';
import cors from 'cors'
import contactRouter from './routes/contact.js';
import{config} from 'dotenv' ; 
// import { findById } from 'moongose/models/user_model.js';
const app = express()

app.use(bodyparser.json());

config({
    path:'.env'
})
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

  
mongoose.connect(
    process.env.MONGO_URL,{
    dbName:'Contact_Keeper'
}).then(()=>console.log("********* connect ***********"));

//contact Router
app.use('/api',contactRouter);

app.get('/',(req,res)=>{
res.json({message:'This is Home Page'})
})

const port = process.env.PORT;
app.listen(port,  ()=>{
    console.log(" ********** Server is created ************* ");
   
})