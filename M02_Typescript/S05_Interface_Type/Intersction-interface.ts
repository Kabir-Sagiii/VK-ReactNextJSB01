
interface IUser {
    name:string,
    gender:string
}

interface IAddress  {
    city:string,
    state:string
}

var newUser : IUser & IAddress = {
    city:"pune",
    state:"MH",
    name:"kabir",
    gender:"male"
}

