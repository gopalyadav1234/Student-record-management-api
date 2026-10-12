const express=require("express");
const { login,register } = require("../controllers/authControllers.js");
const router=express.Router();

router.post("/login",login)
router.post("/register",register)

module.exports=router;
