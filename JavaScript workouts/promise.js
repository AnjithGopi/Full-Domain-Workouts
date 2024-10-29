// promise is an object that represents the eventual completion of an asynchoronous operation and resulting its value,
// A promise can be on these 3 states
// pending
//fulfilled
//rejected




let myPromise = new Promise((resolve,reject)=>{

    setTimeout(()=>{


        let success=true

        if(success){
            resolve("Task is completed")
        }else{

            reject("Task is rejected")
        }

    },2000)
})




myPromise
.then((result)=>{
    console.log(result)
    return new Promise((resolve) => {    
      resolve("Another task done")

    })
}).then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})












