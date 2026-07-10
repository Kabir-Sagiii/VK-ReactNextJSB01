"use strict";
class PersonalDetails {
    uname = "raj";
    id = 0;
    gender = "male";
    display() {
        console.log(this.uname, this.id, this.gender);
    }
}
class User extends PersonalDetails {
    city = "pune";
    email = "raj@gail.com";
    phone = 0;
    print() {
        this.display();
        console.log(this.city, this.email, this.phone);
    }
}
var p1 = new PersonalDetails();
var u1 = new User();
//  console.log(u1)
//  console.log()
//  console.log(p1)
u1.print();
