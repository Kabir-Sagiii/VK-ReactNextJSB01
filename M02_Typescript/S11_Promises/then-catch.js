var promise=new Promise(function(resolve,reject){
    // resolve({name:"rohan",city:"hyd"})

    reject({ok:false,error:"something went wrong"})
  });


  promise.then(function(success){
    console.log("then is called", success)
  }).catch(function(error){
    console.log("catch is called",error)
  })