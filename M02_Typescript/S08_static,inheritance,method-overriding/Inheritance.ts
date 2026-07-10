
class PersonalDetails { // Parent
    uname:string 
    id :number 
    gender:string

    constructor(){
        this.uname = "Vikram";
        this.id = 100001,
        this.gender="male"
    }

    display(){
        console.log(this.uname,this.id,this.gender)
    }

    changeName(newName:string){
     this.uname = newName
    }
}

class User extends PersonalDetails { // Child
    
     city:string
     email:string
     phone:number 

     constructor(){
           super() // it is calling constructor of a parent class
        this.city = "mumbai"
        this.email = "vikram@gmail.com"
        this.phone = 999999
     }

     print(){
        this.display();
        console.log(this.city,this.email,this.phone)
     }

     changeName(newName: string) {
           super.changeName(newName)
         this.uname = this.uname + " "+"Developer";
         this.display()
     }
}

var p1 = new PersonalDetails()

 var u1=new User();
//  console.log(u1)
//  console.log()
//  console.log(p1)

u1.print()
u1.changeName("Sid")