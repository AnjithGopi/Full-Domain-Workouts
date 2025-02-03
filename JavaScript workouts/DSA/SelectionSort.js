let arr=[27,3,7,1,0]



// write a function to sort this array using selection sort


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

    return arr

}


console.log(selectionSort(arr))