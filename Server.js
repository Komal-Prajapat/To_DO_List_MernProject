import mongoose from 'mongoose';
import express from 'express';
import { Contact } from './models/Contact.js';
import bodyparser from 'express';
// import { findById } from 'moongose/models/user_model.js';
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
        if(contact||phone) return res.json({message:"Contact Already Exist ..."});

         contact = await Contact.create({name,gmail,phone,ctype})

        res.json({message:"Contact Saved ..."})

});


app.get("/getcontacts",async  (req , res)=>{
    const contacts = await Contact.find();
    res.json({message:"Fetched all contacts" ,contacts});
});

// @Route - '/:updated 
//@method Put

app.put('/:id', async(req,res)=>{
const contactId = req.params.id;
let contact = await Contact.findById(contactId);
if(!contact) return res.json({message:"Invaild id"});
const {name,gmail,phone,ctype}  =req.body;

contact.name = name;
contact.gmail = gmail;
contact.phone = phone;
contact.ctype = ctype;
await contact.save();
res.json({contact})
})

//@Route - '/:id'
//@method - Delete
app.delete('/:id',async (req,res)=>{
    console.log("Delete route is Working...");
    const id = req.params.id;
    let contact = await Contact.findById(id);
    if(!contact ) return res.json({message:"ID not Exist ...!"})
    await contact.deleteOne();
res.json({
    success:true,
    message:"Your contact has been deleted ... "
})
})


app.get('/',(req,res)=>{
res.json({message:'This is Home Page'})
})

const port = 9000;
app.listen(port,  ()=>{
    console.log(" ********** Server is created ************* ");
   
})