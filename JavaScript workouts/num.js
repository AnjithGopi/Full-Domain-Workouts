


let promise1= new Promise((resolve,reject)=>{


    setTimeout(()=>{


        let success=true

        !success?resolve("promise1 Resolved"):reject("Promise1 Rejected")



    },5000)
})




let promise2= new Promise((resolve,reject)=>{


    setTimeout(()=>{


        let success=true

        !success?resolve("promise2 Resolved"):reject("Promise2 Rejected")



    },6000)
})





 function resolvePromise(){

    try {

        let result= Promise.all([promise1,promise2])
        console.log(result)
        
        
    } catch (error) {

        console.log(error)
        
    }


}



resolvePromise()