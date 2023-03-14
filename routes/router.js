const express = require("express");
const passport = require("passport");
const { registerPatient,registerDoctor, createReport, all_reports, AllReports, login} =require("../controllers/userscontrollers");

const router = express.Router();

router.post("/doctors/register", registerDoctor);

router.post("/login", login);

router.post("/patients/register",passport.authenticate('jwt',{session: false}), registerPatient);

router.post("/patients/:id/create_report",passport.authenticate('jwt',{session: false}), createReport);

router.get("/patients/:id/all_report", all_reports);

router.get("/reports/:status", AllReports);


module.exports =router;

