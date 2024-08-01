const mongoose = require('mongoose')

const schema = new mongoose.Schema({ 
    name: { type : String , required : true },
    email:{type:String,required:true},
    message: {
        type: String,
        required: true
    }
})

const contactModel = mongoose.model("contactModel",schema);
module.exports=contactModel;

// module.exports = schema;