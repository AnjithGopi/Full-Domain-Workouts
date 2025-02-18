


//const fs= require("fs")
import fs from "fs"


const filePath="./JavaScript workouts.txt"


const content="Hello world"


fs.writeFile(filePath,content,(err)=>{

    if(err){

        console.log("cannot read file")
    }else{

        console.log("file successfully added")
    }
})



fs.readFile(filePath,"Utf8",(err,data)=>{


    if(err){

        console.log("cannot read file")

    }else{

        console.log("file read successfully")
        console.log(data)
    }
})



// fs.unlink(filePath,(err)=>{

//     if(err){

//         console.log("cannot delete")

//     }else{

//         console.log("deleted successfully")
//     }
// })