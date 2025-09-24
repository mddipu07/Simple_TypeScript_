var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("username:".concat(this.userName, " and age is ").concat(this.age));
    };
    return User;
}());
var user1 = new User("Anisur Islam", 23);
user1.display();
var user2 = new User("Fahad", 24);
user2.display();
