// 

let arr=[10,12,13,14,15,17,[10,20,30],{a:101,b:201}]

// avoid nesting without using flat 

let result=[]


for(let elem of arr){

    if(Array.isArray(elem)){

        result.push(...elem)
    }else if(typeof elem=="number"){

        result.push(elem)
    }else{

      
        let newArr=Object.values(elem)

        result.push(...newArr)

    }
}

console.log(result)


console.log(result.reduce((acc,curr)=>acc+curr,0))


let largest= result.reduce((acc,curr)=>(acc>curr?acc:curr),result[0])

console.log(largest)




