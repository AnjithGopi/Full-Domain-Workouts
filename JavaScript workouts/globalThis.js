

class Example{


    setGlobal(){

        globalThis.user="Anjith"

        console.log( "global this set successfully...!")
    }


    viewGlobal(){

        console.log( globalThis.user)
    }
}



let obj= new Example()


obj.setGlobal()
obj.viewGlobal()


console.log(globalThis.user)

