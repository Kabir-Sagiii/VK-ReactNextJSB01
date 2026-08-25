
let data = [10,20,30,40,50,["a","b","c","d"]];

 let [a,b,c,x,y,[x1,x2,x3,x4]] = data

function f1(){
 
  
  console.log(x,x3)
}

function f2(){
 
  console.log(x,x3)
}


function f3(){

  console.log(x,x4,x1)
}

f1()
f2()
f3()