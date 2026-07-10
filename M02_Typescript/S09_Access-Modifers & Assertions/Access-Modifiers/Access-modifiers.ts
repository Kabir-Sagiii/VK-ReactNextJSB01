class Student {
   private sId:number;
   public  sName :string;
   protected gender:string

    constructor(id:number,name:string){
        this.sId = id;
        this.sName = name
        this.gender="male"
    }

   private changeId(newId:number){
        this.sId = newId
    }

   public changeName(newName:string){
        this.sName = newName
    }
}

  var s1 = new Student(100,"Raj");
  s1.changeName("Amit")
  console.log(s1.sName)
//   console.log(s1.gender)


  class Address extends Student {

    display(){
        // console.log(this.sName,this.sId)
        console.log(this.gender)
    }
  }