//In JavaScript, objects are collections of key-value pairs,
// where the key (also called a property) is a string (or Symbol), 
//and the value can be any data type, including functions, arrays, and even other objects.
// Objects are a fundamental data structure in JavaScript and are used to store structured data. Here's a detailed look into JavaScript objects:



// creating an object

const person={  // basic

    name:"Anjith",
    age:27
}
console.log(person)
console.log(person.name)
console.log(person["age"]) 

person["name"]="Nithu"

console.log(person)



//creating object using new object() syntax

const person2= new Object()

person2.name="Amal"
person2.age=28


console.log(person2)

person2.age=30

console.log(person2)
 




// delete the property in an object using delete operator


delete person2.age
console.log(person2)




// sampl4e problem : write a function to delete the last element from an object


let values={

    a:1,
    b:2,
    c:3
}


function deleteLast(values){

    let last

    for(let elem in values){

        last=elem


    }

    console.log("last:",last)


    delete values[last]

    return values

}


console.log(deleteLast(values))



// checking if a property exists in an object



let student={

    name:"Joel",
    age:19,
    gender:"male"
}


if("name" in student){  // using in

    console.log("name exists:",student.name)
}

if(student.hasOwnProperty("name")){ // using hasOwnProperty()

    console.log("name is:",student.name)
}




let arr=Object.keys(student)
let arr2=Object.values(student)
let arr3=Object.entries(student)

console.log(arr)
console.log(arr2)
console.log(arr3)




//given an array of objects write a function to add the salaries of 2 employees



let objArr=[{name:"Amal",designation:"Backend developer",salary:45000},{name:"Anjith",designation:"Front end developer",salary:30000}]



function addSalary(arr){

  return  arr.reduce((acc,curr)=>acc+curr.salary,0)

}


console.log(addSalary(objArr))


 // Generator function example

 function* numberGenerator(num) {
    yield num+1;
    yield num+2; 
    yield 3;
 }

const gen = numberGenerator(10);
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 


function outerFunction() {
    const outerVariable = 'I am from outerFunction';

    function innerFunction() {
        console.log(outerVariable); // Accesses outerVariable from its lexical scope
    }

    innerFunction();
}

outerFunction(); // Output: I am from outerFunction

let nums = [1,2,3,[2,3,4],[3,3,4,2,4],[3,2,4,2,4]]
let result=[]


for(let elem of nums){

    if(Array.isArray(elem)){
        result.push(...elem)
    }else{
        result.push(elem)
    }
}

console.log("result:",result)

let arrStr=nums.join("")




let hello= "hello world"

let res=""

for(let i=0;i<hello.length;i++){

    if(i==0 || hello[i-1]==" "){

        res+=hello[i].toUpperCase()
    }else{

        res+=hello[i]
    }
}
console.log("hello:",res)


let words=["joel","amal","anjith","abhilash"]

let result2=[]


for(let elem of words){

   
    let resStr=""

    for(let i=0;i<elem.length;i++){


        if(i==0){
            resStr+=elem[i].toUpperCase()

        }else{

            resStr+=elem[i]

        }
       
    }

    result2.push(resStr)

    
   
}


console.log("result:",result2)