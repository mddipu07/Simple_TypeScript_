
let userId: number;

let firstName: String;

let lastName: String;

let fullName: String;

let isActivated: boolean


userId = 101;
firstName = "anisul"
lastName = "islam"
isActivated = true;


fullName = firstName.concat(lastName);

console.log(`Your id: ${userId},username:${fullName},Account Activated:${isActivated}`);

console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());


function display() {
    console.log("Hi Baby WhatsUp!!");
}
display();