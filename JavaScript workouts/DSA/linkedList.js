

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
    
    hasCycle(){
        
        let slow=this.head
        let fast= this.head
        
        while(fast && fast.next){
            
            slow=slow.next
            fast=fast.next.next
            
            if(slow===fast){
            
            return "cycle detected"
        }
        
        
       
    }
    
    return false
    
    }
    
    
    
    // append(value){
        
    //     let node=new Node(value)
        
    //     if(!this.head){
    //         this.head=node
    //         this.tail=node
    //     }else{
            
    //         this.tail.next=node
    //         this.tail=node
    //     }
        
    //     this.size++
    // }
    
    append(value){
        
        let node=new Node(value)
        if(!this.head){
            this.head=node
        }else{
            
            let temp=this.head
            
            while(temp.next){
                
                temp=temp.next
            }
              temp.next=node
            this.size++
        }
    }
    
    insert(index,value){
        let node=new Node(value)
        let count=0
        let temp=this.head
        let prev=null
        
        while(temp.next){
            
            prev=temp
            
            temp=temp.next
            count++
            
            if(count===index){
               
                node.next=temp
                prev.next=node
            }
        }
        
    }
    
    
    deleteMiddle(){
        
        let count=0
        let middleIndex=Math.floor(this.size/2)
        
        
        let temp=this.head
        let prev=null
        while(temp.next){
            count++
            prev=temp
            temp=temp.next
            if(count==middleIndex){
                prev.next=prev.next.next
                this.size--
                break
            }
            
            
            
            
            
        }
    }
    
    deleteTail(){
        
        let prev=null
        let temp=this.head
        
        while(temp.next){
            
            prev=temp
            temp=temp.next
            
            
        }
       
        prev.next=null
        this.size--
    }
    
    deleteValue(value){
        
        let prev=null
        let temp=this.head
        
        while(temp.next){
            
            prev=temp
            temp=temp.next
            
            if(temp.value===value){
              
                
                prev.next=temp.next
            }
            
            this.size--
        }
    }
    
    
    reverse(){
        let prev = null
        let temp = this.head
        while(temp){
        let next = temp.next
        temp.next = prev 
        prev = temp 
        temp = next
        
        }
        this.head = prev
        
    }
    
    
    print(){
        
        let values=""
        
        let temp=this.head
        while(temp){
            values+=temp.value+"  "
            temp=temp.next
        }
        
        console.log(values)
    }
    
    
    
    
    
}



let list= new LinkedList()

list.append(10)
list.append(20)
list.append(30)
list.append(50)
list.append(12)
list.append(13)
list.append(14)
list.append(70)
list.print()
list.insert(7,16)
//list.deleteMiddle()
//list.reverse()
list.print()
list.deleteTail()
list.print()
list.deleteValue(30)
list.print()

console.log(list.hasCycle())