const mongoose= require('mongoose');
const {Schema}= mongoose;


const MentorSchema=new Schema({
    email:{type:String,required:true},
    name:{type:String,required:true},
    subjects:[{type:Array}],
    experience:{type:String},
    education:{type:String},
    company:{type:String},
    designation:{type:String}
    

})

const Mentor=new mongoose.model('Mentor',MentorSchema);


const saveMentorData=(data)=>{
    return new Promise((resolve,reject)=>{
        let mentor=new Mentor(data);
        mentor.save((err,savedMentor)=>{
            if(err){
                reject(err);
            }else{
                resolve(savedMentor);
            }
        })
    })
}

const getAllMentors=()=>{
    return new Promise((resolve,reject)=>{
        Mentor.find({},{},(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

const getOneMentor=(id)=>{
    return new Promise((resolve,reject)=>{
        Mentor.findOne({"_id":id},{},(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

const updateMentor=(id,updateObject)=>{
    return new Promise((resolve,reject)=>{
        Mentor.updateOne({"_id":id},{"$set":updateObject},(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

const deleteMentor=(id)=>{
    return new Promise((resolve,reject)=>{
        Mentor.deleteOne({"_id":id},(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
            })
        })
}

module.exports={
    saveMentorData:saveMentorData,
    getAllMentors:getAllMentors,
    getOneMentor:getOneMentor,
    updateMentor:updateMentor,
    deleteMentor:deleteMentor

}




