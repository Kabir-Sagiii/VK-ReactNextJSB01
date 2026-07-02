
function createPromise(){
     return new Promise(function(resolve,reject){

        // resolve({name:"rohan",city:"hyd"})
        reject("vaish verma")
    
      });
}

  async function handlePromise(){
    try{
        var data  = await createPromise();
        console.log(data)
    }catch(error){
        console.log("catch is executed")
      console.log(error)
    }
  }

  handlePromise()