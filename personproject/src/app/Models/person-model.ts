export class PersonModel{
    pid: number;
    name: string;
    age: number;
    gender: string;
    constructor(pid: number, name: string, age: number, gender: string){
        this.pid = pid;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}