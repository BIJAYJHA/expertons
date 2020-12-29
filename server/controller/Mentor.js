const mentorModel = require('../models/Mentor');
const utility = require('../service/utility');



const saveMentorData = async (req, res) => {
    try {
        const mentorObject = req.body;
        console.log(mentorObject);
        const mentorData = await mentorModel.saveMentorData(mentorObject);
        res.status(200).send({ "message": "mentor data is saved", "data": mentorData })
    } catch (error) {
        console.log("error====>", error);
        res.status(400).send({ "error": "something went wrong!!" });
    }

}

const getAllMentors = async (req, res) => {
    try {
        const mentors = await mentorModel.getAllMentors();
        res.status(200).send({ "data": mentors });

    } catch (error) {
        res.status(400).send({ "error": "something went wrong!!" });
    }

}

const getOneMentor = async (req, res) => {
    try {
        const id = req.query.id;
        const mentorData = await mentorModel.getOneMentor(id);
        res.status(200).send({ "data": mentorData });


    } catch (error) {
        console.log("error===>",error);
        res.status(400).send({ "error": "something went wrong!!" });

    }

}

const updateMentor=async(req,res)=>{
    try{
        const id=req.body.id;
        const updatedObject=req.body.updatedObject;

        const updatedMentor=await mentorModel.updateMentor(id,updatedObject);

        console.log(updatedMentor);
        res.status(200).send({"message":"mentor is updated","data":updatedMentor})

    }catch(error){
        console.log("eror===>",error);
        res.status(400).send({"error":"something went wrong!!"});
    }

}

const deleteAMentorData=async(req,res)=>{
    try{
        const id=req.body.id;
        const deleteMentor= await mentorModel.getOneMentor(id);
        const updatedDeleted= await mentorModel.deleteMentor(id);
        if(updatedDeleted['ok']==1)
        res.status(200).send({"message":"mentor is deleted","data":deleteMentor});
        else
        res.status(400).send({"error":"something went wrong!!"})
    }catch(error){
        res.status(400).send({"error":"something went wrong!!"});
    }
    
}


module.exports = {
    saveMentorData: saveMentorData,
    getAllMentors: getAllMentors,
    getOneMentor:getOneMentor,
    updateMentor:updateMentor,
    deleteAMentorData:deleteAMentorData

}