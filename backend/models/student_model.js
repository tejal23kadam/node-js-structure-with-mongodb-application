const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({    
    name:{
        type: String,
        require : true
    },
    std:{
        type : String,
        require : true
    },
    mobile:{
        type: Number,
        require : true
    },
    email:{
        type: String,
        require : true
    },
    password:{
        type:String,
        require:true
    },
    userType:{
        type : Number,
        require:true
    }
},{timeStamps:true})

mongoose.model('student',studentSchema)
