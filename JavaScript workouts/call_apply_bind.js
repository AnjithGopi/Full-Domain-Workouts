

const user={

    name:"Anjith",
    age:20
}


const person={

    name:"Amal",
    age:22
}



function sayHi(question){

    console.log (`hi ${this.name},${question}`)
}





sayHi.call(user,"how are you?")
sayHi.apply(user,["how old are you?"])
const bindSample=sayHi.bind(user,"where are you?")
bindSample()



//Arrow functions do not have their own this 


const greet=()=>{
    console.log(`hi Iam ${this.name}`)
}


sayHi.call(person,"are you ok?")

//greet.call(user)//will throw error because arrow functon do not have their own this




function Employee(name,age){

    this.name=name
    this.age=age

}


const employee= new Employee("Anjith",26)

console.log(employee)