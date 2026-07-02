interface IUser {
    name:string,
    gender:string
}

interface IAddress extends IUser {
    city:string,
    state:string
}

var myUserData : IAddress = {
     name:"raj",
     gender:"male",
     city:"bhopal",
     state:"MP"
}

