// // async await

// async function greet(){
//     // return "Rohit";

//     return new Promise((resolve, reject)=>{
//         // resolve("Rohit");
//         reject("Rohit");
//     })
// }

// const response = greet();
// // console.log(response)
// response.then((data)=>console.log(data))
// .catch((error)=>{
//     console.log("Error: ", error);
// })


// fetch("https://api.github.com/users")
// .then((response)=>response.json)
// .then((data)=>console.log(data));


/* always use await inside an async function */
async function github(){
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    console.log(data);
}

github();
console.log("Hello Ji, Kaise ho!");