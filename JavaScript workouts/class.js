
class Person{

    constructor(name,age){

        this.name=name
        this.age=age

    }


    sayHi(){


        console.log(`Hello ${this.name}`)

    }



}




let anjith=new Person("Anjith",26)


anjith.sayHi()