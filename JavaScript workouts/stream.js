
import fs from 'fs'


const writeStream= fs.createWriteStream("streaming.txt")
writeStream.write("Hello stream")
writeStream.end()



const readStream=fs.createReadStream("streaming.txt")

readStream.on('data',(chunk)=>{
    console.log(chunk.toString())
})


