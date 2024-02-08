const express=require("express")
const app=express()
const bodyP=require("body-parser")
app.use(bodyP.json())
app.use("/",function(req,res){
    res.sendFile("D:/personal/New folder/Downloads/codemirror/index.html")
})
app.listen(8000)