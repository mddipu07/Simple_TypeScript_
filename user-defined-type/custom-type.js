var users;
users = [];
var user1;
user1 = { userName: "anis", userId: 122 };
users.push(user1);
var user2;
user2 = { userName: "Dipu", userId: 128 };
users.push(user2);
var user3;
user3 = { userName: "Sajid", userId: 107 };
users.push(user3);
var getRequest;
getRequest = "GET";
function requestHandler(RequestType) {
    console.log(RequestType);
}
requestHandler("GET");
