import cors from "cors"
import express from"express"
const app=express()



app.use(cors())




app.get("/data",(req,res)=>{

    res.status(200).json({name:"Anjith",
        age:25,
        occupation:"Software Engineer",
        hobbies:["Cricket","Football","Reading","lhjdg"],
    })

})




app.listen(5000,()=>{

    console.log("server running in port 5000")
})








