const Employee = require("./Employee");

class Intern extends Employee {

    //using details set in parent class
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    //functions to provide input & role details
    getSchool(){
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}