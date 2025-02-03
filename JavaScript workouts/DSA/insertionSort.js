
let arr=[1,3,2,5,4,8,7,9,11,10,6]


function insertionSort(arr){


    for(let i=1;i<arr.length;i++){

        let key=arr[i]
        let prev=i-1

        while(prev>=0 && arr[prev]>key){

            arr[prev+1]=arr[prev]
            prev--
        }

        arr[prev+1]=key
    }

    return arr

}



console.log(insertionSort(arr))