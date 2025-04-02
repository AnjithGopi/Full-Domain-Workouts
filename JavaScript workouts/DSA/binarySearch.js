




function binarySearch(arr,target){

  let left=arr[0]
  let right=arr[arr.length-1]

  while(left<=right){

    let mid=Math.floor((left+right)/2)

    if(arr[mid]==target){

        return mid 
    }else if(arr[mid]<target){

        left=mid+1
    }else if (arr[mid]>target){

        right=mid-1
    }
  }

  return -1

}




console.log(binarySearch([1,2,3,4,5,6],4))// binary dearch can be performed in sorted arrays only







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

          return 
        }
      }

      if(value<parentNode.value){
        parentNode.left=node 
      }else{
        parentNode.right=node
      }
    }

    console.log("Value added:",value)
    return 
  }

  

  inOrder(node=this.root,result=[]){

    if(node){
      this.inOrder(node.left,result)
      result.push(node.value)
      this.inOrder(node.right,result)
    }

    return result
  }

  preOrder(node=this.root,result=[]){

    if(node){

      result.push(node.value)

      this.preOrder(node.left,result)
      this.preOrder(node.right,result)

    }

    return result
  }

  postOrder(node=this.root,result=[]){

    if(node){

      this.postOrder(node.left,result)
      this.postOrder(node.right,result)
      result.push(node.value)
    }

    return result
  }


}


let bst=new Bst()

bst.insert(1)
bst.insert(4)
bst.insert(7)
bst.insert(8)


console.log(bst.inOrder())
console.log(bst.preOrder())
console.log(bst.postOrder())