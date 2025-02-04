
// write a function to sort the array using merge sort



function merge(left,right){
    let result=[]
    let leftIndex=0
    let rightIndex=0
    
    while(leftIndex<left.length && rightIndex<right.length){
        
        if(left[leftIndex]<right[rightIndex]){
            
            result.push(left[leftIndex])
            leftIndex++
        }else{
            
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    
    return [...result,...left.slice(leftIndex),...right.slice(rightIndex)]
  }
  
  
  
  function mergeSort(arr){
      
      if(arr.length<=1){
          return arr
      }
      
      let middle=Math.floor(arr.length/2)
      
      let leftArr=arr.slice(0,middle)
      let rightArr=arr.slice(middle)
      
      return merge(mergeSort(leftArr),mergeSort(rightArr))
      
      
  }
  
  
  
  let arr=[1,3,2,5,4,6,7,9,8,11,10,13,12]
  console.log(mergeSort(arr))