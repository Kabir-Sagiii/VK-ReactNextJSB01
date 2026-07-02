interface IUser {
    username:string;
   readonly id:number;
   city?:string;
   gender:boolean;
}

var user1 : IUser ={
  username :"rohan",
  id:100,
  city:"banglore",
  gender:false
}

// user1.id = 106;  Invalid bcoz its read only

user1.username = "Rajesh"