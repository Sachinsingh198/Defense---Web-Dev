// let global = 30;

// function greet(){
//     let global = 40;
//     console.log(global);
// }

// greet();
// console.log(global);

// function createCounter(){

//     let count = 0;
//     function increment(){
//         count++;
//         return count;
//     }
//     // increment();
//     return increment;
// }

// const increment = createCounter();
// console.log(increment());
// console.log(increment());
// console.log(increment());

// console.log(user.deposit(0));

// function createAccount() {
//   let balance = 500;
//   const user = {
//     deposit: function (amount) {
//       if (typeof amount == "number" && amount > 0) {
//         balance += amount;
//         return balance;
//       }
//     },
//     withdraw: function (amount) {
//       if (typeof amount == "number" && amount > 0) {
//         balance -= amount;
//         return balance;
//       }
//     },
//     getBalance: function () {
//       return balance;
//     },
//   };
//   return user;
// }


// const customer = createAccount();
// console.log(customer.deposit(200));
// console.log(customer.withdraw(500));
// customer.getBalance();



// //Higher Order function
// function double(){
//     return function execute(){
//         console.log("Hello");
//     }
// }

// const n = double();
// n();


// function double(value){
//     return function(num){
//         return num*value;
//     }
// }

// // let prod = double(10);
// // console.log(prod(2));

// let prod = double(10)(2);
// console.log(prod)