// promise is an object that represents the eventual completion of an asynchoronous operation and resulting its value,
// A promise can be on these 3 states
// pending
//fulfilled
//rejected




let myPromise = new Promise((resolve,reject)=>{

    setTimeout(()=>{


        let success=true

        if(success){
            resolve("Promise 1 resolved")
        }else{

            reject("promise 1 rejected")
        }

    },2000)
})



let myPromise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let success=true
        if(!success){
            resolve("Promise 2 resolved")
        }else{
            reject("Promise 2 rejected")
        }
    },2000)
})



let myPromise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let success=true
        if(success){
            resolve("Promise 3 resolved")
        }else{
            reject("Promise 3 rejected")
        }
    },2000)
})




Promise.all([myPromise,myPromise2,myPromise3])  // promise .all example


.then((result)=>{
    console.log(result)
   

    
})

.catch((error)=>{
    console.log(error)
})




// promise .race---------


Promise.race([myPromise,myPromise2,myPromise3])

.then((result)=>{
    console.log("race resolved with:",result)
})
.catch((error)=>{
    console.log("race rejected with:",error)
})











