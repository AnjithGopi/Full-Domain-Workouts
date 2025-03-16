

let timeOut=1000

function one(callback){

    setTimeout(()=>{

        console.log("One")
        callback()


    },timeOut)
}


function two(callback){
    setTimeout(()=>{

        console.log("Two")
        callback()
    },timeOut)
}


function three(callback){

    setTimeout(()=>{

        console.log("Three")
        callback()
    },timeOut)
}


function four(callback){

    setTimeout(()=>{

     console.log("Four")
     callback()
    },timeOut)
}



// one(()=>{

//     two(()=>{

//         three(()=>{

//             four(()=>{

//                 console.log("end")
//             })
//         })


//     })

// })


function handleCallbacks(message){


    return new Promise((resolve)=>{

        setTimeout(()=>{

            console.log(`${message}`)

            resolve()


        },timeOut)
    })
}


async function delay() {


    await handleCallbacks("One")
    await handleCallbacks("Two")
    await handleCallbacks("Three")
    await handleCallbacks("Four")
    console.log("End")
    
}


delay()


function handlePromises(message){
    
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(message)
        resolve()
        },1000)
        
    })
}


/*
async function delay(){
    
    
    await handlePromises("One")
    await handlePromises("Two")
    await handlePromises("Three")
}

delay()*/

handlePromises("One")
.then(()=>handlePromises("two"))
.then(()=>handlePromises("Three"))