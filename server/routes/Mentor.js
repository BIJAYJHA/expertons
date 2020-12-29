const express=require('express');
const router=express.Router();
const controller=require('../controller/Mentor');

router.post('/savementor',controller.saveMentorData);
router.get('/getallmentors',controller.getAllMentors);
router.get('/getmentor',controller.getOneMentor);
router.post('/updatementor',controller.updateMentor);
router.post('/deletementor',controller.deleteAMentorData);

module.exports=router