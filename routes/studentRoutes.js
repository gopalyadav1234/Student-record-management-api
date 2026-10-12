const express=require("express")
const router=express.Router();

const authMiddleware=require("../middleware/authMiddleware.js");
const { addStudent, getStudents, getStudent, updateStudent, deleteStudent } = require("../controllers/studentController.js");

//Add Student
router.post("/",authMiddleware,addStudent)

//Get all Student
router.get("/",authMiddleware,getStudents)

//Get one student
router.get("/:id",authMiddleware,getStudent)

//Update student
router.put("/:id",authMiddleware,updateStudent)

//delete Student
router.delete("/:id",authMiddleware,deleteStudent)

module.exports=router;