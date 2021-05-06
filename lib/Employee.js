const inquirer = require('inquirer');

class Employee {
    constructor(name, Id, email) {
        this.name = name;
        this.id = Id;
        this.email = email;
    }
    getName(){
        return this.name;
    }

    getId(){
        return this.Id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;