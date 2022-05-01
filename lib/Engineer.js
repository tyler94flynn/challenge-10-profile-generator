const Employee = require("./Employee");

class Engineer extends Employee {

    //using details set in parent class
    constructor(name, id, email, gitHub){
        super(name, id, email);
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