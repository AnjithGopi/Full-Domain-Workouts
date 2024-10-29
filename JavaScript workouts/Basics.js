
// implementation of object proxy and proxy traps



const user={
    name:"Anjith",
    role:"developer"
}

const handler={
    get(user,property){
        console.log(`the property is ${property}`)
        return user[property]
    },

    set(user,property,value){
        console.log(`adding ${property}`)
        user[property]=value
        console.log(`value added to ${property} is ${value}`)
    }
}
const proxy=new Proxy(user,handler)


console.log(proxy.name)
proxy.age=27


// call apply and bind



// in js call apply and bind are methods used to change the context ( this.value) of a function .
//Each has its own way of handling arguments but achieves a similar goal of allowing methods and functions to be executed in different contexts.




let person={
    name:"Joel",
    age:25,
    sayHello(){
        console.log("hello ",this.name)
    }
}



let greetings= function greet(message){

    console.log("Hello "+this.name+" "+message)
}


greetings.apply(person,["How are you"])


greetings.call(person,"Poy oomb")

person.sayHello()
let newFunc=person.sayHello.bind(person)
newFunc()