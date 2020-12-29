const adminModel=require('../models/Admin');

const signup=async( req,res)=>{
    try{
        const adminObject= req.body;
        const adminData= await adminModel.saveAdminData(adminObject);
        res.status(200).send({"message":"signup is done successfully","data":adminData});

    }catch(error){
        res.status(400).send({"message":"something went wrong !!"});
    }
   
}

const login=async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;
        const adminData= await adminModel.getOneAdmin(email,password);
        res.status(200).send({"message":"login is successfull","data":adminData});
    }catch(error){
        res.status(400).send({"message":"something went wrong!!"});
    }
}

module.exports={
    signup:signup,
    login:login
}