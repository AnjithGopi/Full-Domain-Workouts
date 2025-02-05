class Node{
    
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    
    constructor(){
        
        this.root=null
    }
    
    
    insert(value){
        let node=new Node(value)
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
                    // Handle duplicate values
                    console.log("Duplicate value not allowed:", value)
                    return
                }
            }
            
            if(value>parentNode.value){
                parentNode.right=node
            }else{
                parentNode.left=node
            }
        }
        
        console.log("value Added",value)
        
        return 
        
    }
    
    
    isValid(){
        
        if(!this.root){
            return true
        }else{
            
            let stack=[]
            let currentNode=this.root
            let prev=-Infinity
            
            while(currentNode || stack.length>0){
                
                while(currentNode){
                    stack.push(currentNode)
                    currentNode=currentNode.left
                }
             
                
                currentNode=stack.pop()
                
                if(currentNode.value <= prev){
                    return false
                }
                
                prev = currentNode.value
                currentNode = currentNode.right
            }
            
            return true
        }
    }
}


let bst = new BinarySearchTree()

bst.insert(10)
bst.insert(10)// duplicate value not allowed  
bst.insert(15)
bst.insert(13)
bst.insert(14)
bst.insert(20)
bst.insert(25)
bst.insert(18)
bst.insert(30)
console.log(bst.isValid())