
function f1(){

    return ["reactjs",
        function(){console.log("function is called")}]
}

//  const value =   f1();
//  console.log(value[1].pname)
//  value[2]()


 const [x,z]   = f1()

 console.log(x)
  z()