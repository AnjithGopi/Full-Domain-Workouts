// ways to create an object in js




// object litereals

let user={
    name:"Anjith",
    age:27
}

console.log(user)

// constructors

let person=new Object()

person.name="Amal"
person.age=27

console.log(person)

// constructor function

function Employee(name,age){
    
    this.name=name
    this.age=age
    
    
}

const employee= new Employee("Joel",19)

console.log(employee)

//factory functions

function createuser(name,age){


return {
    
    name,
    age,
    sayHi(){
        
        console.log(`hi ${this.name}`)
    }
}
    
    
}

let user1=createuser("Alice",20)
let user2=createuser("Amal",20)
user1.sayHi()
user2.sayHi()

console.log(user1)
console.log(user2)


// destructuring

const name="Abin"
const age=26

const obj={name,age}

console.log(obj)
















