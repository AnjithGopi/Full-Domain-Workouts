




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




console.log(binarySearch([1,2,3,4,5,6],4))