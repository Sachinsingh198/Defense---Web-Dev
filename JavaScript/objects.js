//object
//Key value pairs

// const user = {
//     name: "Sachin",
//     age: 20,
//     gmail: 'Sachinsinghfarshwan1234@gmail.com',
//     amount: 250,
// }

// console.log(user.name)

// user.aadhar = 2423040934;
// console.log(user)
// delete user.aadhar;
// console.log(user)


// const user2 = user
// user2.name = 'Ajay'
// console.log(user.name)
// console.log(user2.name)

// console.log(Object.keys(user))
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for(let key in user){
//     console.log(key, user[key])
// }

// //destructuring the object
// const {name, age} = user;
// console.log(name, ": ", age);

// const arr = [10, 20, 30 , 40, 60];

// const [first, second] = arr;

// console.log(first, second);

// const {name: UserName, age: UserAge} = user;
// console.log(UserName, UserAge);

// for(let keys of Object.entries(user)){
//     console.log(keys);
// }

// for(let [keys, values] of Object.entries(user)){
//     console.log(keys, values);
// }

// const user = {
//     name: "Sachin",
//     age: 20,
//     gmail: 'Sachinsinghfarshwan1234@gmail.com',
//     amount: 250,
//     greetiing : function(){
//         console.log(`Strike is Coming on 18th of the October : ${this.name}`);
//         return 20;
//     }
// }

// const val = user.greetiing();
// console.log(val);

// const user = {
//     name: "Sachin",
//     age: 20,
//     gmail: 'Sachinsinghfarshwan1234@gmail.com',
//     amount: 250,
//     address : {
//         city: "Gopeshwar",
//         state: 'Uttarakhand'
//     }
// }

// console.log(user.address);
// console.log(user.address.city);

//Shallow Copy /*the content at the level 1 will now be independent but the content at the level 2 which is address, if we want to make change in the ones address, it will automatically changes the others address too
// user2 = {...user} //Now user and user2 do not point to the same object, user2 is independent copy
// user2.name = "Mohan";
// console.log(user.name);
// console.log(user2.name);
// user2.address.city = "Dwarka" // changes the addres city of the user too


// //Deep copy

// const user2 = structuredClone(user);
// console.log(user2);

// user2.address.city = "Gop";
// console.log(user.address.city);


// const user = {
//     name: 'sachin', 
//     age : 10,
//     0: 100,
//     2: "Mohan"
// }

// console.log(user.name)
// //  //console.log(user.0)// throws an error
// console.log(user[0]);
// console.log(user["0"]);

// key: symbol

const sym = Symbol("id");

const user = {
    name: "Rohit",
    age: 20,
    0: 200,
    2: "Mohan", 
    [sym] : "Hello Ji"
}

console.log(user[sym]);