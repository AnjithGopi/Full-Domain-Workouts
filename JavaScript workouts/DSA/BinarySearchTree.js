

class Node{

    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}


class Bst{

    constructor(){

        this.root=null
        
    }


    insert(value){

        let node= new Node(value)

        if(!this.root){
            this.root=node
        }else{

            let prev=null
            let temp=this.root 

            while(temp){

                prev=temp

                if(value<temp.value){

                    temp=temp.left

                }else if(value>temp.value){

                    temp=temp.right
                }
            }

            if(value<prev.value){

                prev.left=node 
            }else{
                prev.right=node
            }
        }

        console.log("value added")
    }




}



let bst= new Bst()


bst.insert(10)
bst.insert(2)
bst.insert(7)
bst.insert(5)
bst.insert(12)
bst.insert(11)
bst.insert(17)
bst.insert(9)


