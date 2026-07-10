var value:unknown = "raj";

// var user = value as string
var user = <string>value

console.log(user.length)



var response :unknown = {
    name:"sagar",
    gender:"male"
}



var result = response as {
    name:string,
    gender:string
}

console.log(result.name)