

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

            let currentNode=this.root
            let parentNode=null

            while(currentNode){
                parentNode=currentNode

                if(value<currentNode.value){
                    currentNode=currentNode.left
                }else if(value>currentNode.value){
                    currentNode=currentNode.right
                }else{
                    // If value is equal, don't insert duplicate
                    console.log("Duplicate value not allowed:", value)
                    return
                }
            }

            console.log("currentNode:",currentNode)
            console.log("ParentNode:",parentNode)

            if(value<parentNode.value){
                parentNode.left=node
            }else{
                parentNode.right=node
            }
        }

        console.log("Value added:",value)
    }


}


let bst= new Bst()

bst.insert(10)
bst.insert(12)
bst.insert(15)
bst.insert(13)
bst.insert(14)
bst.insert(20)
bst.insert(25)
bst.insert(18)
bst.insert(30)