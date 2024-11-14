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


