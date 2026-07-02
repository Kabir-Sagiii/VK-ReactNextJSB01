type userType ={
    name:string,
    gender:string
}

type addressType = {
    city:string
}

var user : userType & addressType = {
    name:"vaishnavi",
    gender:"female",
    city:"pune"
}


type emp = [string,number]

var myEmp :emp = ["",100]

type status = "online" | "offline";

var mode : status = "online"