

const ba = [23,5,7,3,5,2,87]
// 87
// 2 87
// 5 2 87
// 3 5 2 87
// 7 3 5 2 87
// 5,7,3,5,2,7
// 23,5,7,3,5,2,87


let num=""

let rev=ba.reverse()

for(let elem of rev){
    
    num=elem+" "+num
    
    console.log(num)
}


const products = [
    {a:[4,34,343]},
    {b:[333,334]},
    {c:[34,343]},
    {d:[23,4,23,32]}
    ]
    
    let sum=[]
    
for(let elem of products){
    
    for(let element in elem){
        
        sum.push(elem[element].reduce((acc,curr)=>acc+curr,0))
    }
    
    
}


let result=sum.reduce((acc,curr)=>acc+curr,0)

console.log(result)