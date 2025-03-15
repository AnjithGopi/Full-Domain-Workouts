
// 1  find the total amount spend by the customers who have a completed order
const customers = [
    {
        orderId: 1,
        name: "John Doe",
        items: [
            { product: "Laptop", price: 1200 },
            { product: "Mouse", price: 25 }
        ],
        status: "completed"
    },
    {
        orderId: 2,
        name: "Alice Johnson",
        items: [
            { product: "Phone", price: 800 },
            { product: "Headphones", price: 150 }
        ],
        status: "pending"
    },
    {
        orderId: 3,
        name: "Bob Smith",
        items: [
            { product: "Tablet", price: 600 },
            { product: "Keyboard", price: 75 }
        ],
        status: "completed"
    },
    {
        orderId: 4,
        name: "Emma Brown",
        items: [
            { product: "Monitor", price: 300 },
            { product: "Webcam", price: 90 }
        ],
        status: "pending"
    },
    {
        orderId: 5,
        name: "Michael Wilson",
        items: [
            { product: "Smartwatch", price: 250 },
            { product: "Wireless Charger", price: 50 }
        ],
        status: "completed"
    }
];




let result=[]

for(let elem of customers){
    
    if(elem.status==="completed"){
        
        let res=elem.items.reduce((acc,curr)=>acc+curr.price,0)
        
        result.push([elem.name,res])
        
        
    }
}



let final=Object.fromEntries(result)

console.log(final)


// 2  find the name of the employee with the longest name

const employees = [
    { id: 1, name: "John Doe", department: "Engineering" },
    { id: 2, name: "Alice Johnson", department: "Marketing" },
    { id: 3, name: "Bob Smith", department: "Human Resources" },
    { id: 4, name: "Emma Brown", department: "Finance" },
    { id: 5, name: "Michael Wilson", department: "Sales" }
];


let nameSize= employees.map((item)=>item.name.length-1)


let employee= employees[nameSize.indexOf((Math.max(...nameSize)))].name

console.log(employee)



// 3 find the customer who purchased most quantity of items


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


function findCustomer(orders){

    const customerQuantities = {};

    // Iterate over each order using for...of loop
    for (const order of orders) {
        let totalQuantity = 0;

        // Calculate total quantity for the current order
        for (const item of order.items) {
            totalQuantity += item.quantity;
        }

        // Update the total quantity for the customer
        if (customerQuantities[order.name]) {
            customerQuantities[order.name] += totalQuantity;
        } else {
            customerQuantities[order.name] = totalQuantity;
        }
    }

    return customerQuantities


  
    }








console.log(findCustomer(orders))







const user = {
    name: "Anjith",
    address: {
      city: "Kochi",
      country: "India",
      location: {
        lat: 9.9312,
        lon: 76.2673
      }
    },
    contacts: {
      email: "anjith@example.com",
      phone: {
        mobile: "+91 9876543210",
        work: null
      }
    },
    preferences: null
  };
  
  
  
  
  console.log(user.address?.location?.lat)
  
  console.log(user.address.location.place)