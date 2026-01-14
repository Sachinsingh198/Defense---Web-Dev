// function greeting(){
//     console.log("Hello Guys, The strike is coming soon!")

// }


// greeting();

// function addNumber(...nums){
//     let sum = 0;
//     for(let num of nums){
//         sum += num;
//     }
//     return sum;
// }

// console.log(addNumber(1,2,3,4,5));

// let ans = [1,2,3,4,5,6,7]

// const [first, second, ...num] = ans;
// console.log(first, second,num);

// const addNumber = function(num1 , num2){
//     return num1 + num2;
// }


// console.log(addNumber(4,5));

// arrow function
// const addNumber = (num1, num2)=>{
//     // console.log("Hello Ji")
//     return num1 + num2;
// // }

// const addNumber = (num1, num2) => num1 + num2;
// console.log(addNumber(4, 8));

// let arr = [10, 11, 19, 7, 50];
// arr.sort((a,b)=>a-b);
// console.log(arr);

// const squareNumber = (num) => num**2;
// //if we have single parameter , then we can also implement it as this too

// const squareNumber = num => num**2;
// console.log(squareNumber(2));

// const greeting = () =>{
//     let user = {
//         name: "Rohit",
//         age: 20
//     }
//     return user;
// }

// const greeting = () =>{
//     return {
//         name: "Rohit",
//         age: 20
//     }
// }

// const greeting = () =>({name: "Rohit", age: 20});
// let user = greeting();
// console.log(user.age, user.name)

// // // IIFE => Immediately invoke function

// (function greeting(){
//     console.log("Hello")
// })();

// (()=>{
//     console.log("Hi");
// })();

//// Call Back Function

// function greet(){
//     console.log("first");
// }
// function meet(callback){
//     console.log("meet");
//     callback();
// }

// meet(greet)

// function blinkitOrderPlaced(){
//     console.log(("We have started packing your order"))
// }

// function zomatoOrderPlaced(){
//     console.log(("We have started preparing your food"))
// };

// function payment(amount, callback){
//     console.log(`${amount} payment has been initialized`);
//     console.log("Payment is recieved");
//     callback();
// }

// // payment(1500, blinkitOrderPlaced);
// payment(1400, zomatoOrderPlaced);