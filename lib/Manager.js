const Employee = require("./Employee");

class Manager extends Employee {

    //using details set in parent class
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //functions to provide input & role details
    getSchool(){
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Manager;