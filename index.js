
// removing vowels from a string


let str="anjithieo"

let arr=["a","e","i","o","u"]

let newStr=''


for(let elem of str){

    if(!arr.includes(elem)){

        newStr+=elem


    }
}


console.log(newStr)


// method 2


let removed=''


for(let elem of str){
if(!"aeiou".includes(elem)){

    removed+=elem

     
  }
}

console.log(removed)

// reversing hello world to world hello without using any built in methods  


let hell="hello world"
let word=''
let result=''


for(let elem of hell){

    if(elem!==" "){

        word+=elem
    }else{

        result=word+" "+result
        word=""
    }



    
}


result=word+" "+result


console.log(result)



// remove the last value from an object


let person={
    name:"Anjith",
    age:20,
    gender:"male"
}



let last
for(let elem in person){
 last=elem

}

console.log(person)


delete person[last]

console.log(person)




let arr1=[123,456,789]
let newArr=[]

// [987,654,321]

for(let i=arr1.length-1;i>=0;i--){
    let n=arr1[i];
    let rem=0;
    while(n>0){
        let digit=n%10;  //789   98
         rem=rem*10+digit;   //0*10=0+9=9
         n=Math.floor(n/10);
            }
            newArr.push(rem)
}
console.log(newArr);

let reversedArr = arr1.map(num => 
    parseInt(num.toString().split('').reverse().join(''))
  );
  
  console.log(reversedArr); // Output: [987, 654, 321]



// for(let elem of arr1){


//     newArr.push(Array.from(String(elem),Number))


// }


// let result1=[]


// for(let elem of newArr){

   

//     result1.push(elem.reverse().join(""))
  

// }

// console.log(result1.reverse())



