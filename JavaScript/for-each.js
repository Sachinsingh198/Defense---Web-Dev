// const arr = [10, 20, 21, 56];

// // arr.forEach((Number, index, arr)=>{
// //     console.log(Number, index, arr);
// // })

// let sum = 0;

// arr.forEach((Number, index, arr)=>{
//     sum += Number;
// })
// console.log(sum);


// const arr = [10, 20, 21, 56, 83, 23];

// const new_arr = arr.filter((number) => number >= 15);
// new_arr.forEach((number)=>{
//     console.log(number);
// }) 

// const arr = [10,20,30, 50, 80];

// const newArr = arr.map((num)=>num*3).sort((a,b)=>b-a);
// console.log(newArr);


// Reducer

// //Data Structure : Set => arr without any duplicates
// const arr = [10, 10,20,21, 21, 56, 83, 23];


// const s1 = new Set(arr);
// s1.add(10);
// console.log(s1);
// console.log(s1.has(20));
// console.log(s1.has(22));
// s1.delete(22);
// console.log(s1);


// map: 
const m1 = new Map([
    ['Sachin', 40],
    [1, "Sachin"],
    [true, 11],
    [[10,30,11], "Mohit"]
]);

console.log(m1);

m1.set({name:"Maninsh", age:20}, false);

console.log(m1.has("Manish"));