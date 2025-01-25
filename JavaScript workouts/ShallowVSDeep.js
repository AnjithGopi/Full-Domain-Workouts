


let user={

    name:"Anjith",
    age:20,
    city:{

        city1:"kochi",
        city2:"Ernakulam"
    }
}





let cloned=structuredClone(user)

let shallowCopy={...user}

console.log(shallowCopy)

shallowCopy.city.city1="Thrissur"

console.log(shallowCopy)
console.log(user)

cloned.city.city1="Bangalore"
console.log(cloned)
console.log(user)



///_________________________________________Optional Chaining______________//////////////




let person={

    name:"Anjith",
    age:20,
    city:{

        city1:{
            street1:"MG road",
            street2:"Mythri lane"
        },
        city2:"Ernakulam"
    }
}


let street1=person.city?.city1?.street1
console.log(street1)

let street2=person.city?.city2?.street1
console.log(street2)



