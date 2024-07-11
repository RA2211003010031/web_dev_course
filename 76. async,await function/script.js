// async function getData(){
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(455)
//       }, 4000);
//     })
    
// }

async function getData() {
  let a = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      let data = await a.json()
      console.log(data)
      return 455
}

async function main() {
  console.log("Script.js loading")
  console.log("Getting Data")
  let data = await getData()
  console.log(`Waiting completed, Data = ${data}`);
  console.log(`Async Await Completed`);
}


main()