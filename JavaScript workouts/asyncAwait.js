



async function sayHi(){

   let promise= new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("Hi");
        },1000)
    })
    

    let result=await promise

 return  result 





}



sayHi()



