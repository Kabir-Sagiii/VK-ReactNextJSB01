var data = { // props in react js
    name:"Kabir",
    gender:"male",
    id:101
}

var {gender,name} = data

console.log(gender,name)


var info = [10,30,40,["a","b"]]; // state concept in reactjs

var [x,_,z,[x1,x2]] = info;

console.log(z,x2)



