class User {
    uname:string;
   static city:string;
    id:number

    constructor(name:string,city:string,id:number){
      this.uname = name;
      User.city = city;
      this.id = id
    }

    display(){
        console.log(this.uname,User.city,this.id)
    }

  static  changeCity(newCity:string){
        this.city = newCity
        // console.log(this.uname)
        // this.display()
    }
}