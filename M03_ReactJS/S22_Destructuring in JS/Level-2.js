
var nestedArray = [10,20,["a","b","c"],30,40,["sagar","sneha","vaish"]]

// let [x1,x2,[a,b,c],x4,x5,[y1,y2,y3]] = nestedArray

// console.log(b,y1)


var info = [1,2,["a","b",[true,false,"reactjs"]]]

//Destructuring
let [x1,x2,[y1,y2,[a,b,c=76,d=34]]] = info

// var value = info[2][2][4]
// console.log(b,c,d)

function f1(){
    console.log(b)
}

// f1()


var data = [[10,20,[true,false]],["a","b","c",[55.55,88.88]]];

var [[o1,o2,[t,f]],[s1,s2,s3,[d1,d2]]] = data

function getDecimal(){
    console.log(d2)
    // 88.88 value
    // var value = data[1][3][1]
    // console.log(value)
    // 
}

function getboolean(){
    console.log(f,s3)
    //false + c
    // console.log(data[0][2][1]);
    // console.log(data[1][2])
}

// getDecimal()
// getboolean()

var obj1 = {
    userName : {
        firstName:{
            originalName:"Raj",
            nickName:"bunty"
        },
        lastName:"Verma"
    },
    gender : "male"
}

let {gender,userName:{firstName:{nickName},lastName}} = obj1

console.log(nickName)