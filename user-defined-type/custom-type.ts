
type User = {userName: string ; userId:number};

let users: User[];
 users = [];


 let user1 : User;
 user1 = {userName:"anis", userId:122}
users.push(user1);


 let user2 : User;
 user2 = {userName:"Dipu", userId:128}
users.push(user2);



 let user3 : User;
 user3 = {userName:"Sajid", userId:107}
users.push(user3);


type RequestType = "GET" | "POST"

let getRequest: RequestType;
getRequest = "GET";


function requestHandler (RequestType: RequestType) {
        console.log(RequestType);
}
requestHandler("GET")