
import express from"express"
const app=express()
const router=express.Router()
app.use(router)

app.use((req,res,next)=>{

    let a=true
   if(!a){
   
    res.status(401).json({message:"unAuthorized user"})
   }else{

    next()

   }

   
})


router.use((req,res,next)=>{

    let success=true

    if(!success){

        res.status(200).json({message:"Successull"})
    }

    else{

        next()
    }
})






app.get("/home",(req,res,next)=>{

    console.log("req type",req.method)

   res.status(200).json({message:"Hello world"})
})



app.listen(5000,()=>{

    console.log("server running in port 5000")
})








