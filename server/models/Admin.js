const mongoose= require('mongoose');
const {Schema}= mongoose;


const AdminSchema=new Schema({
    email:{type:String,required:true},
    password:{type:String},
    name:{type:String,required:true}

})

const Admin=new mongoose.model('Admin',AdminSchema);

const saveAdminData=(adminData)=>{
    return new Promise((resolve,reject)=>{
        let admin= new Admin(adminData);
        admin.save((err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })

    })
}

const getOneAdmin=(email,password)=>{
    return new Promise((resolve,reject)=>{
        Admin.findOne({"email":email, "password":password},{},(err,adminData)=>{
            if(err){
                reject(err);
            }else{
                resolve(adminData);
            }
        })
    })
}

module.exports={
    saveAdminData:saveAdminData,
    getOneAdmin:getOneAdmin


}




