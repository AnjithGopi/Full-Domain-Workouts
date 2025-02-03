let arr=[1,3,2,7,4,5,6,10,11,17,13,12,15,16,19,18]


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

    return arr


}






console.log(bubbleSort(arr))


// sort the given array using bubbleSort

let newArr=[1,3,2,7,4,5,6,10,11,17,13,12,15,16,19,18]

function sortArray(arr){

  console.log("Before sorting: "+arr.join(" "))

    let swapped

    do {

        swapped=false

        for(let i=0;i<arr.length-1;i++){

            if(arr[i]>arr[i+1]){

                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]

                swapped=true

            }
        }
        
    } while (swapped)

        return "After sorting : "+arr.join("  ")


}



console.log(sortArray(newArr))