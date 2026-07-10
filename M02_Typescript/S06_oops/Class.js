"use strict";
class User {
    username = "";
    id = 0;
    changeUserName(newName) {
        this.username = newName;
    }
}
var user1 = new User();
user1.changeUserName("rohan");
console.log(user1);
var user2 = new User();
user2.changeUserName("Vaishnavi");
user2.id = 100;
console.log(user2);
