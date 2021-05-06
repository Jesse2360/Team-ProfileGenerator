class Engineer extends Employee {
    constructor(github){
        this.github = 'GitHub UserName' +github;
    }
    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;