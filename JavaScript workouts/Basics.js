
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