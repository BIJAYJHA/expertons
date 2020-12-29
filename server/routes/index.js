const express=require('express');
const mentorRouter=require('./Mentor');
const adminRouter=require('./admin');

const router=express.Router();


router.use('/api/mentor', mentorRouter);
router.use('/api/auth',adminRouter);

module.exports=router;