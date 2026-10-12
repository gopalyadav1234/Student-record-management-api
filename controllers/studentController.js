const Student=require("../models/Student.js")

//Add Student
const addStudent=async(req,res)=>{
  try{
    const student=await Student.create(req.body);
    res.json({message:"Student added successfully",student})
  }catch(err){
    res.json({message:"error.message"})
  };
}
  //Get all Student
  const getStudents=async(req,res)=>{
  try{
    const students=await Student.find();
    res.json({students})
  }catch(err){
    res.json({message:"error.message"})
  };
}
//Get Student by Id
const getStudent=async(req,res)=>{
  try{
    const student=await Student.findById(req.params.id);
    if(!student){
      return res.json({
        message:"Student not found"
      })
    }
    res.json({student})
  }catch(err){
    res.json({message:"error.message"})
  };
}
//Update Student
const updateStudent=async(req,res)=>{
  try{
    const student=await Student.findByIdAndUpdate(req.params.id,req.body);
    if(!student){
      return res.json({
        message:"Student not found"
      })
    }
    res.json({student})
  }catch(err){
    res.json({message:"error.message"})
  };
}
//Delete Student
const deleteStudent=async(req,res)=>{
  try{
    const student=await Student.findByIdAndDelete(req.params.id);
    if(!student){
      return res.json({
        message:"Student not found"
      })
    }
    res.json({student})
  }catch(err){
    res.json({message:"error.message"})
  };
}

module.exports={
  addStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent
};