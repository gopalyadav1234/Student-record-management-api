const mongoose=require("mongoose")

const StudentSchema=new mongoose.Schema({
  name:{type:String,require:true},
  email:{type:String,require:true},
  age:{type:Number,require:true},
  course:{type:String,require:true},
  marks:{type:Number,require:true},
});
module.exports=mongoose.model("Student",StudentSchema)