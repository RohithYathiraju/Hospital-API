const Doctor =require('../models/doctor');
const Patient=require('../models/patient');
const jwt =require('jsonwebtoken');

module.exports.registerDoctor =async(req,res,next)=>{
    try {
        const doctor=await Doctor.create(req.body);

        res.status(200).json({
            succes:true,
            message:"doctor created successfully",
        });
    } catch(error) {
        res.status(500).json({
            succes:false,
            message:"could not create a doctor, internal server error",
        });
    }
};

module.exports.login=async(req, res, next) => {
    try { 
        const user =Doctor.find(req,body);

        if(user) {
            const token=jwt.sign(user.id, "secret");
            res.status(200).json({
                success: true,
                token,
        });
        } else {
            res.status(404).json({
                succes: false,
                message: "name or password is invalid",
            });
        }

    } catch (error) {
        res.status(500).json({
            succes:false,
            message:"something went wrong",
        });
    }
}


module.exports.registerPatient =async(req,res,next)=>{
    try {
        req.body.doctor="640a3072f1530132f425eb74";
        const patient=await Patient.create(req.body);

        res.status(200).json({
            succes:true,
            message:"successfully created a patient",
        });
    } catch(error) {
        res.status(500).json({
            succes:false,
            message:"could not create a patient, internal server error",
        });
    }
};


module.exports.createReport =async (req,res,next) => {
    try{
        const patient =await Patient.findById(req.params.id);

        req.body.date =Date.now();

        patient.reports.push(req.body);

        patient.save();

        res.status(200).json({
            succes:true,
            message:"report submitted successfully ",
        });

    } catch (error) {
        res.status(500).json ({
            succes: false,
            message: "could not cerated a report, internal server error",
        });
    }
}

module.exports.all_reports = async (req, res, next) => {
    try {
        const patient = await Patient.findById(req.params.id);

        res.status(200).json({
            succes:true,
            reports:patient.reports,
        });
    } catch(error) {
        res.status(500).json({
            succes:false,
            message:"could not able to fetch the patient reports",
        });
    }
};

module.exports.AllReports =async(req, res, next) => {
    try {
        const patient=await Patient.find({
            reports:{$select : {status: req.params.status}},
        });

    }catch(error) {
        res.status(500).json({
            succes:false,
            message:"could not able to fetch the patient reports",
        });
}
};