

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

    deleteMiddle(){

        let prev=null

        let count=0
        let middleIndex=Math.floor(this.size/2)
        let temp=this.head

        while(temp.next){
            count++
            prev=temp
            temp=temp.next

            if(count==middleIndex){
                prev.next=temp.next
                break
            }
        }

        


    }

    sum(){  // finding the sum of first 2 and last 2 elements of linked list

        let temp=this.head
        let prev=null
        let sum=0

        sum+=this.head.value+this.head.next.value

        while(temp.next){
            prev=temp
            temp=temp.next
        }

       

        sum+=temp.value+prev.value

        console.log(sum)
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

    removeDuplicates(){

        
        
       


    }

}


let list1= new LinkedList()

for(let i=1;i<=10;i++){

    list1.append(i)
}

list1.append(11)

list1.append(8)
list1.append(7)


list1.print()
list1.getSize()
list1.reverse()

list1.print()
list1.sum()
//list1.deleteMiddle()
list1.print()

list1.removeDuplicates()
list1.print()
list1.deleteMiddle()
list1.print()