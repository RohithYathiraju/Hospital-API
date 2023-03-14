const mongoose = require ('mongoose');

const patientSchema = new mongoose.Schema({
    name : {
        type:String,
        required : [true, "please Provide patient name"],
        unique:true,
    },
    reports: [
        {
            status:{
                type:String,
                required:true,
                enum:["Neagtive", "Travelled-Quarantine", "Symptoms-Quarantine", "Positive-Admit"],
            },
            data : {
                type :Date,
                required:true,
            },
        },
    ],

    doctor: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required:true,
    },
});

const Patient = new mongoose.model('Patient', patientSchema);

module.exports =Patient;