

class Node{

    constructor(value){

        this.value=value
        this.next=null
    }
}


class LinkedList{


    constructor(){
        this.head=null
        this.tail=null

        this.size=0
    }


    getSize(){

        console.log(this.size)
    }

    append(value){


        let node= new Node(value)

        if(!this.head){

            this.head=node 
            this.tail=node
        }else{

           this.tail.next=node
           this.tail=node
        }


        this.size++
    }
    


    print(){

        let temp=this.head

        let values=[]

        while(temp){

            values.push(temp.value)
            temp=temp.next

            
        }

        console.log(values.join(" => "))
    }


}



let list= new LinkedList()


for(let i=1;i<=10;i++){

    list.append(i)
}


list.print()
list.getSize()