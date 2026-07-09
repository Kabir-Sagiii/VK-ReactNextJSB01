
// class A {

//     name:string ;

//     constructor(name:string){
// this.name = name
//     }

//     returnNewName(newName:string):string{
// this.name = newName;
// return this.name
//     }

// }

// new A("hello");

// new A(100)

// new A(true)

class A<D> {

    name:D;
    constructor(name:D){
  this.name = name
    }

    returnNewName(newName : D):D{

        this.name = newName;
        return this.name
    }

}

new A("hello");

new A(100)

new A(true)