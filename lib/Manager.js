const Employee = require("./Employee");

class Manager extends Employee {

    //using details set in parent class
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //functions to provide input & role details
    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;