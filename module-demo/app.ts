import { studentName,studentAge } from "./student";

export function displayInfo(): void{
    console.log(`${studentName}, ${studentAge}`);
}

displayInfo()