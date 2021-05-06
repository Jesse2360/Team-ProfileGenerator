class Manager extends Employee {
    constructor(OfficeNumber){
        this.OfficeNumber = 'Office Number is' +OfficeNumber;
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;