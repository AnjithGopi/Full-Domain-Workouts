let arr=[1,3,2,4,6,5,8,7,9,11,10]


// write a function to sort the array in ascending order using bubble sort


function bubbleSort(arr){
    
    let swapped
    
    do{
        
        swapped=false
        
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
                swapped=true
            }
        }
        
    }while(swapped)
    
    return arr.join(" ")
    
}


//console.log(bubbleSort(arr))

// sort the array using selection sort

function selectionSort(arr){
    
    for(let i=0;i<arr.length-1;i++){
        
        let lowest=i
        
        for(let j=i+1;j<arr.length;j++){
            
            if(arr[lowest]>arr[j]){
                lowest=j
            }
        }
        
        if(lowest!==i){
            [arr[lowest],arr[i]]=[arr[i],arr[lowest]]
        }
    }
    return arr.join(" ")
}

//console.log(selectionSort(arr))

// write a function to sort the array using insertion sort


function insertionSort(arr){
    
    for(let i=1;i<arr.length;i++){
        
        let key=arr[i]
        let prev=i-1
        
        if(arr[prev]>key){
            arr[prev+1]=arr[prev]
            prev--
        }
        
        arr[prev+1]=key
    }
    
    return arr.join(" ")
    
}


console.log(insertionSort(arr))










// write a function to sort the given array using quick sort


function quickSort(arr){
    
    if(arr.length<=1){
        return arr
    }
    
    
    let pivot=arr[0]
    let left=[]
    let right=[]
    
    for(let i=1;i<arr.length;i++){
        
       (arr[i]<pivot)?left.push(arr[i]):right.push(arr[i])
    }
    
    return [...quickSort(left),pivot,...quickSort(right)]
    
}

console.log(quickSort(arr))



// write a function to sort the Array using merge sort



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

    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)

   return  merge(mergeSort(left),mergeSort(right))
}




console.log(mergeSort([1,3,2,5,4,7,6,10,9]))


























