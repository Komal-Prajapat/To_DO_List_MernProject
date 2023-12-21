import mongoose from 'mongoose';
import express from 'express';
import { Contact } from './models/Contact.js';
import bodyparser from 'express';
const app = express()
app.use(bodyparser.json());


mongoose.connect(
    "mongodb+srv://komalprajapat267:1SqXaaRyOH1STqSt@komal.fjcbbzw.mongodb.net/",{
    dbName:'Contact_Keeper'
}).then(()=>console.log("********* connect ***********"));

// @Route -> '/addContact'
//@Method ->  '/post'

app.post('/addcontact', async(req, res) => {
    console.log("add Contact is working ");
    // const contactName = req.body.name; 
    //     console.log(contactName);
        // console.log(req.body)
        const {name,gmail,phone,ctype}  =req.body;
        let contact = await Contact.findOne({gmail});
        let phonenumber = await Contact.findOne({phone});
        if(contact||phonenumber) return res.json({message:"Contact Already Exist ..."});

         contact = await Contact.create({name,gmail,phone,ctype})

        res.json({message:"Contact Saved ..."})

});

app.get('/getcontacts' ,  (req , res)=>{
    console.log(" all Contacts ");
})

const port = 9000;
app.listen(port,  (req,res)=>{
    console.log(" ********** Server is created ************* ");
   
})

