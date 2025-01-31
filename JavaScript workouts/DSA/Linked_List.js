

class Node{

    constructor(value){

        this.value=value
        this.next=null
    }
}


class LinkedList{


    constructor(){

        this.head=null
        this.size=0
    }



    append(value){


        const node= new Node(value)

        if(!this.head){
            this.head=node
        }else{

            let temp=this.head
            while(temp.next){
                temp=temp.next
            }
            temp.next=node
        }

        this.size++


    }

    reverse(){

        let prev=null
        let temp=this.head

        while(temp){

           let next=temp.next
            temp.next=prev
            prev=temp
            temp=next
        }

        this.head=prev



    }

    getSize(){

        console.log(this.size)
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


let list1= new LinkedList()

for(let i=1;i<=10;i++){

    list1.append(i)
}


list1.print()
list1.getSize()
list1.reverse()

list1.print()