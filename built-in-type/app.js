var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 101;
firstName = "anisul";
lastName = "islam";
isActivated = true;
fullName = firstName.concat(lastName);
console.log("Your id: ".concat(userId, ",username:").concat(fullName, ",Account Activated:").concat(isActivated));
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
function display() {
    console.log("Hi Baby WhatsUp!!");
}
display();
