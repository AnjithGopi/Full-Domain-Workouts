//Reverse a String: Write a function to reverse a given string without using built-in functions like split(), reverse(), or join().


let str="hai iam anjith"


function reverse(str){

    
let newStr=""


    for(let i=str.length-1;i>=0;i--){

       newStr+=str[i]


    }

    return newStr

}



console.log(reverse(str))



// capitalise first letter of the string



function capitalise(str){

    let result=""


    for(let i=0;i<str.length;i++){

        if(str[i]==0||str[i-1]==" "){

            result+=str[i].toUpperCase()
        }else{

            result+=str[i]
        }
    }

   return  result



   

}



console.log(capitalise(str))


//Find the Most Frequent Character: Given a string, find the character that appears the most frequently. If there’s a tie, return any one of the most frequent characters.

function frequent(str){

    let result

    let count={}

 


    for(let elem of str){


        if(!count[elem]){

            count[elem]=1
        }else{
            count[elem]++
        }




    }


    let max=0

    for(let elem in count){

        if(count[elem]>=max){
            max=count[elem]
            result=elem
        }

      
    }

    

   


    return result

}


console.log(frequent(str))

//Compress a String: Write a function that performs basic string compression using the counts of repeated characters. For example, for the string "aabcccccaaa", return "a2b1c5a3".



let word="aabcccccaaa"

function compress(str){


    let result="" //a2b1c5a3
    let count=1

    for(let i=0;i<str.length;i++){

        if(str[i]==str[i+1]){
            count++
           
        }else{
            result+=str[i]+count
            count=1
            
        }
    }

    console.log(result)

}


compress(word)












const result1 = firstNonRepeatingCharacter("swiss");
console.log(result1); // Output: "w"

const result2 = firstNonRepeatingCharacter("aabbcc");
console.log(result2); // Output: "No non-repeating character"




function firstNonRepeatingCharacter(str){


let result="No element found"
    for(let elem of str){

        if(str.indexOf(elem)==str.lastIndexOf(elem)){

            result=elem
            break
        }
    }

    return result

}





// remove vowels from the given string



let remove= "lets learn javascript"


let vowels="aeiou"
let result=""

for(let elem of remove){

    if(!vowels.includes(elem)){

        result+=elem

    }
}

  let capitalised=result.split(" ").map((item)=>item[0].toUpperCase()+item.slice(1)).join(" ")  // capitilise the first letter of the string


console.log(capitalised)


// find number of zeros in 2d array


let values=  [[0, 1, 0, 1],[1, 0, 1, 0],[0, 1, 0, 1],[1, 0, 1, 0]]

let count=0


    for(let elem of values){

        for(let i=0;i<elem.length;i++){

            if(elem[i]==0){
                count++
            }
        }
    }


    console.log(count)



    // find out the expensive fruit


let fruits = {
    apple : "$100",
    orange : "$100",
    grape : "$30",
    rambu:"$30",
    papaya : "$100",
    berry : '$40'
}


let max=  Math.max (...Object.values(fruits).map((item)=>Number(item.slice(1))))

let expensive= Object.keys(fruits).filter((item)=>Number(fruits[item].slice(1))===max)

console.log(expensive)




let words="lets learn javascript together javascript learn"


