
// //tuple 
// var data : readonly [string,number?] = ["kabir"]
// console.log(data)
// // data = ["sagar",103]

// // data.push(101)
// console.log(data[0])


var user : {id:number,name?:string,readonly gender:string} = 
{id:101,gender:"male"}

console.log(user);

user.name="Aditya"
// user.gender="female"  invalid

console.log(user);