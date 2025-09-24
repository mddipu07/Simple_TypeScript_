
let userId: (string | number | boolean);

userId = "101";
userId = 101;
userId = true;

function displayUserInfo(userId:String | number){
    console.log(userId);
}

displayUserInfo("101");
displayUserInfo(101);