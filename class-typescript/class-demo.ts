class User{
   userName: string;
   age: number;
   
   
   constructor(userName:string, age:number){
        this.userName = userName;
        this.age = age;
   }
   display(): void {
    console.log(`username:${this.userName} and age is ${this.age}`);
   }
}

let user1 = new User("Anisur Islam", 23)
user1.display()
let user2 = new User("Fahad", 24)
user2.display()