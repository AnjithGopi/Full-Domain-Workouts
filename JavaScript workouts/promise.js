// promise is an object that represents the eventual completion of an asynchoronous operation and resulting its value,
// A promise can be on these 3 states
// pending
//fulfilled
//rejected






let promise=new Promise((resolve,reject)=>{


    setTimeout(()=>{

        let success=true

        if(success){

            resolve("Done")

        }
        else{

            reject("failed")
        }

        

    },2000)

})



promise
.then((result)=>{
    console.log(result)
    return result

})
.then((result)=>{
    return result+ " "+"added"
})
.then((result)=>{
    console.log(result+"3")
})
.catch((error)=>{
  console.log("rejected with ",error)
})



console.log(eval("1+1"))



Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise((_,reject)=> setTimeout(() => reject("rejected"), 1000))  // 3
  ]).then((result)=>{
    console.log(result)
  })
  .catch((error)=>{
    console.log(error)
  });



  let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ];
  
  // map every url to the promise of the fetch
  let requests = urls.map(url => fetch(url));
  
  // Promise.all waits until all jobs are resolved
  Promise.all(requests)
    .then(responses => responses.forEach(
      response => console.log(`${response.url}: ${response.status}`)
    ));










    let names = ['iliakan', 'remy', 'jeresig'];

let request = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
    // all responses are resolved successfully
    for(let response of responses) {
      console.log(`${response.url}: ${response.status}`); // shows 200 for every url
    }

    return responses;
  })
  // map array of responses into an array of response.json() to read their content
  .then(responses => Promise.all(responses.map(r => r.json())))
  // all JSON answers are parsed: "users" is the array of them
  .then(users => users.forEach(user => console.log(user.name)));