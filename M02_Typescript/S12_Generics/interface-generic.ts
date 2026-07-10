
// interface IValue {
//     value : string
// }

interface IValue<T>{
    value:T
}

var obj1 : IValue<number> = {
    value:100,
   
}

var obj2 : IValue<string> = {
    value :"hello"
}

var obj3 : IValue<boolean> = {
    value:true
}