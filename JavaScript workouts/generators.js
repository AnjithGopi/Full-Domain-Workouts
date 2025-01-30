


function* returnUnique(arr){
  

    let vals=[]

    for(let elem of arr){

        if(!vals.includes(elem)){

            vals.push(elem)

            yield elem
        }
    }

    

}





let arr=["Apple","Orange","Mango","Grape","Apple","Orange"]

let generator=returnUnique(arr)


console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)



