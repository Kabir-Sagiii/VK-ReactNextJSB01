class User {
    name:string;
    id:number;
  static  gender:string;
   static city:string;

    constructor(name:string,id:number,gender:string,city:string){
        this.name = name
        this.id = id
        User.gender = gender
        User.city = city
    }

    display(){
        console.log(this.name,this.id,User.gender,User.city)
    }

   static changeCity(newCity:string){
        this.city = newCity
        console.log(this.name)
    }
}

  var user1 =  new User("Raj",101,"male","hyd")

  var user2 =  new User("Sid",103,"male","hyd")

  var user3 =  new User("Pooja",102,"female","hyd");

  var user4 =  new User("Keerthi",104,"female","hyd")

  user1.display();
  user2.display()

//   console.log(user1)
//   console.log()
//   console.log(user2);
//   console.log()
//     console.log(user3)
//   console.log()
//   console.log(user4);
//   console.log()