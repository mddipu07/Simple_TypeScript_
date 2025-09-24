// numeric-enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["ReadData"] = 1] = "ReadData";
    RequestType[RequestType["saveData"] = 3] = "saveData";
    RequestType[RequestType["DeleteData"] = 4] = "DeleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
console.log(RequestType.ReadData);
// string-enum
var RequestType2;
(function (RequestType2) {
    RequestType2["ReadData"] = "Read_Data";
    RequestType2["DeleteData"] = "Delete_Data";
})(RequestType2 || (RequestType2 = {}));
// console.log(RequestType2["DeleteData"]);
// hetergenous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["ReadData"] = "Read_Data";
    RequestType3["DeleteData"] = "Delete_Data";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
