// check for the words that can be made only using the given letters


// let words=["apple","hello","pen","help"]
// let letters="elpoh"

// let results=[]

// let letterSet=new Set(letters)



// for(let elem of words){

//     if([...elem].every((item)=>letterSet.has(item))){

//         results.push(elem)
//     }
// }

// console.log(results)


// find the customer who purchased more quantity of items

const orders = [
    {
        orderId: 1,
        name: "John Doe",
        items: [
            { product: "Laptop", price: 1200,quantity:1 },
            { product: "Mouse", price: 25,quantity:1 }
        ],
        status: "completed"
    },
    {
        orderId: 2,
        name: "Alice Johnson",
        items: [
            { product: "Phone", price: 800,quantity:1 },
            { product: "Headphones", price: 150,quantity:3 }
        ],
        status: "pending"
    },
    {
        orderId: 3,
        name: "Bob Smith",
        items: [
            { product: "Tablet", price: 600,quantity:1 },
            { product: "Keyboard", price: 75,quantity:1 }
        ],
        status: "completed"
    },
    {
        orderId: 4,
        name: "John Doe",
        items: [
            { product: "Monitor", price: 300 ,quantity:1},
            { product: "Webcam", price: 90,quantity:1 }
        ],
        status: "pending"
    },
    {
        orderId: 5,
        name: "Alice Johnson",
        items: [
            { product: "Smartwatch", price: 250,quantity:1 },
            { product: "Wireless Charger", price: 50,quantity:2 }
        ],
        status: "completed"
    }
];



function customer(orders){


    let customers={}


    for(let elem of orders){


        let quantity=0

        for(let item of elem.items){

            quantity+=item.quantity
        }


        if(customers[elem.name]){

            customers[elem.name]+=quantity
        }else{

            customers[elem.name]=quantity
        }




    }

    //return customers


    let max=0
    let name

    for(let elem in customers){

        if(customers[elem]>max){

            max=customers[elem]
            name=elem
        }
    }

    return name





}



console.log(customer(orders))
