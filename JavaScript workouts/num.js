
// group the customers according to the status


const data = [
    { id: 1, customer: "John ", total: 150, status: "completed" },
    { id: 2, customer: "Emma ", total: 200, status: "pending" },
    { id: 3, customer: "Liam ", total: 300, status: "cancelled" },
    { id: 4, customer: "Olivia ", total: 120, status: "completed" },
    { id: 5, customer: "Noah ", total: 180, status: "pending" },
    { id: 6, customer: "Sophia ", total: 250, status: "cancelled" },
    { id: 7, customer: "James ", total: 400, status: "completed" },
    { id: 8, customer: "Mia ", total: 100, status: "pending" },
    { id: 9, customer: "Ethan ", total: 220, status: "cancelled" },
    { id: 10, customer: "Isabella ", total: 330, status: "completed" },
  ];
  
  // let result={}


  // for(let elem of data){

  //   if(!result[elem.status]){

  //       result[elem.status]=[]
  //   }

  //   result[elem.status].push(elem)
  // }

  // console.log(result)


  function groupCustomers(data){


    let result={}

    for(let element of data){

      if(!result[element.status]){
        result[element.status]=[]
      }

      result[element.status].push(element)
    }

    return result

  }


  console.log(groupCustomers(data))
  
  
  
  