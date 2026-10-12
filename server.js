const express=require("express")
const mongoose=require("mongoose")
const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
  res.send("student")
})
app.use("/api/auth",require("./routes/authRoutes"))
app.use("/api/students",require("./routes/studentRoutes"))


 mongoose.connect("mongodb://127.0.0.1:27017/student_records")
 .then(()=>{
  console.log("mongodb coonected")
 })
 .catch((err)=>{
console.log(err)
 })
app.listen(3000,()=>{
  console.log("server running")
})