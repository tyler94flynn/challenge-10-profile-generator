const Employee = require("./Employee");

class Engineer extends Employee {

    //using details set in parent class
    constructor(name, id, email, role, gitHub){
        super(name, id, email, role);
        this.gitHub = gitHub;
    }

    //functions to provide input & role details
    getGitHub(){
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }
}