import express from 'express'
import { Contact } from '../Models/Contact.js';
import { addcontact, deletecontact, getcontact } from '../controllers/contact.js';
import { updateData } from 'moongose/controller/comments_controller.js';
const router  = express.Router();
//home Route
router.get('/home',(req,res)=>{
    res.json({message:"Converting to MVC "})
})
// @Route -> '/addContact' 
//@Method ->  '/post'

router.post('/addcontact', addcontact)

router.get("/getcontacts",getcontact)
// @Route - '/:updated 
//@method Put
router.put('/:id', updateData)
//@Route - '/:id'
//@method - Delete
router.delete('/:id',deletecontact)
export default router