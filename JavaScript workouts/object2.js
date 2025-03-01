
// find the student with highest average score

const students = [
    { name: "Alice Johnson", scores: [85, 90, 78], age: 20 },
    { name: "Bob Smith", scores: [88, 76, 92], age: 22 },
    { name: "Charlie Brown", scores: [90, 85, 87], age: 21 },
    { name: "David Wilson", scores: [70, 80, 75], age: 19 },
    { name: "Emily Davis", scores: [95, 92, 89], age: 23 },
    { name: "Frank Miller", scores: [60, 65, 70], age: 20 },
    { name: "Grace Taylor", scores: [88, 91, 85], age: 22 },
    { name: "Hannah Martinez", scores: [72, 80, 78], age: 21 },
    { name: "Isaac White", scores: [85, 87, 90], age: 20 },
    { name: "Jack Anderson", scores: [93, 89, 95], age: 24 }
  ];
  

  

  function highestAverage(students){


    let average=students.map((item)=>item.scores.reduce((acc,curr)=>(acc+curr),0)/item.scores.length)

       

    let student=Math.max(...average)

    return students[average.indexOf(student)].name


  

  }



  console.log(highestAverage(students))