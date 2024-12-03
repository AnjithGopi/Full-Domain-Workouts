


const express=require("express")

const app=express()


app.get("/",(req,res)=>{


    res.send("hello world")


})



app.get("/sum/:num1/:num2",(req,res)=>{


    const{num1,num2}=req.params

    const number1=parseInt(num1)
    const number2=parseInt(num2)

    const sum=number1+number2

    res.status(200).json({sum})
})


app.get("/add",(req,res)=>{

    const {num1,num2}=req.query

    const sum= Number(num1)+Number(num2)

    res.status(200).json({"sum":sum})
})





app.listen(2000,()=>{


    console.log("port running")
})










