class Intern extends Employee {
    constructor(school){
        this.school = 'School I attended was' +school;
    }
    getSchool(){
        return this.school;
    }

    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;