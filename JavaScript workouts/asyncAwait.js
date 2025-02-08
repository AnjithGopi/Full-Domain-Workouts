
async function promiseSample(){


    try {

        
     let promise_1= new Promise((resolve,reject)=>{

        setTimeout(()=>{

            let flag=true

            flag?resolve("promise 1 resolved"):reject("promise 1 rejected")


        },1000)
     })



     let promise_2= new Promise((resolve,reject)=>{

        setTimeout(()=>{

            let flag=true

            flag?resolve("promise 2 resolved"):reject("promise 2 rejected")


        },1000)


     })


       //let result= await Promise.any([promise_1,promise_2])

       let resolved= await Promise.resolve("given value")
        
      console.log(resolved)



        
    } catch (error) {

        console.log(error)
        
    }


}



promiseSample()