const mongoose = require ('mongoose');

const doctorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please Enter Your name"],
        unique:true,
    },
    password: {
        type:String,
        required:[true, "Please Enter Your Password"],
        miniLength:[6, "Password should be greater than 6 charaters"],
    },
});

const Doctor = new mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;