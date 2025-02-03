

let arr=[1,3,2,4,6,5,9,8,7,10,12,11]


//write a function to sort the array using quick sort



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