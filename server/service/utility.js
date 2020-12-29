const mongoose=require('mongoose');

const makeMongoId=(id)=>{
    const mongoid= mongoose.Types.ObjectId(id);
    return mongoid;
}


module.exports={
    makeMongoId:makeMongoId
}