



let user={

    name:"Anjith",
    age:22,
    gender:"Male",
    occupation:"Student",
}



let person={

    name:"Amal",
    age:23,
}


person.__proto__ = user // sets user as a prototype of person


console.log(person.gender)
console.log(person.occupation)


///----------------


// Base object (prototype 1)
let animal = {
    species: "Animal",
    canEat: true,
    eat() {
      console.log(`${this.species} is eating.`);
    }
  };
  
  // Intermediate object (prototype 2)
  let mammal = {
    hasFur: true,
    breatheOxygen() {
      console.log(`${this.species} breathes oxygen.`);
    }
  };
  
  // Set animal as the prototype of mammal
  Object.setPrototypeOf(mammal, animal);
  
  // Derived object (prototype 3)
  let dog = {
    species: "Dog",
    bark() {
      console.log("Woof! Woof!");
    }
  };
  
  // Set mammal as the prototype of dog
  Object.setPrototypeOf(dog, mammal);
  
  // Accessing properties and methods
  console.log(dog.species);        // "Dog" (from dog object)
  console.log(dog.hasFur);         // true (inherited from mammal)
  console.log(dog.canEat);         // true (inherited from animal)
  dog.bark();                     // "Woof! Woof!" (from dog object)
  dog.eat();                      // "Dog is eating." (inherited from animal)
  dog.breatheOxygen();            // "Dog breathes oxygen." (inherited from mammal)
  
  // Verifying the prototype chain
  console.log(Object.getPrototypeOf(dog) === mammal);  // true
  console.log(Object.getPrototypeOf(mammal) === animal);  // true
  

