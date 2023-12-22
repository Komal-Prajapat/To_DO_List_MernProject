import { Contact } from '../Models/Contact.js';

export const addcontact = async(req, res) => {
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


}
export const getcontact =  async  (req , res)=>{
    const contacts = await Contact.find();
    res.json({message:"Fetched all contacts" ,contacts});
}

export const updatecontact =async(req,res)=>{
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
}
    export const deletecontact =  async (req,res)=>{
        console.log("Delete route is Working...");
        const id = req.params.id;
        let contact = await Contact.findById(id);
        if(!contact ) return res.json({message:"ID not Exist ...!"})
        await contact.deleteOne();
    res.json({
        success:true,
        message:"Your contact has been deleted ... "
    })
    } 