
// numeric-enum
enum RequestType {
    ReadData = 1,
    saveData = 3,
    DeleteData,
}

console.log(RequestType);
console.log(RequestType.ReadData);

// string-enum

enum RequestType2{
    ReadData = "Read_Data",
    DeleteData = "Delete_Data"
}

// console.log(RequestType2["DeleteData"]);

// hetergenous enum

enum RequestType3{
    ReadData = "Read_Data",
    DeleteData = "Delete_Data",
    id = 101
}

