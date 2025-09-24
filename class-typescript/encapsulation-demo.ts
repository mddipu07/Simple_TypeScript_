 class User{
   public userName: string;
   public age: number;
   
   
   constructor(userName:string, age:number){
        this.userName = userName;
        this.age = age;
   }
    display(): void{
        console.log(`username:${this.userName}, and age is ${this.age}}`);
    } ;
}

class Student extends User{
     studentId: number;
        constructor(userName:string, age:number,studentId:number){
         super(userName,age);
         this.studentId = studentId
        }
    display(): void {
    console.log(`username:${this.userName}, and age is ${this.age}, id:${this.studentId}`);
   }
}

let student1 = new Student("anisur",31,13045646);
// student1.display()

let user1 = new User("Robbi",34)
user1.userName = "sajid"
user1.display()