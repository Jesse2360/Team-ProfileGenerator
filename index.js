const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./function.js');

const staff = [];

function letsGo() {inquirer.prompt([{
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your Id?',
      
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your e-mail?',
      
    },
    {
      type: 'list',
      name: 'title',
      message: 'What is your job title?',
      choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
        when: function(answers) {
        return answers.title === 'Manager';
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username:',
        when: function(answers) {
        return answers.title === 'Engineer';
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school did you attend?',
        when: function(answers) {
        return answers.title === 'Intern';
        }
    },
    {
        type: 'confirm',
        name: 'again',
        message: 'Enter another Employee?',

    }
  ])
  .then((answers) => {
        const newPersonnel = makeWorker(answers);
        staff.push(newPersonnel);
        if (answers.again === true) {
            letsGo();
        }else {
            const htmlContent = generateHTML(staff);
            fs.writeFile('./dist/output.html', htmlContent, (err) =>
              err ? console.log(err) : console.log('Congrats, created your html!')
            );  
        }
  });
};

    function makeWorker(answers){
        let newPersonnel;
        if (answers.title === 'Manager'){
            newPersonnel = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);

        }else if(answers.title === 'Engineer'){
            newPersonnel = new Engineer(answers.name, answers.id, answers.email, answers.github);

        }else if(answers.title === 'Intern') {
            newPersonnel = new Intern(answers.name, answers.id, answers.email, answers.school);

        }return newPersonnel;
};

letsGo();