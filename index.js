const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const questions = [
{
    type: "input",
    name: "name",
    message: "What is the Manager's Name?"
},
{
    type: "input",
    name: "id",
    message: "What is the Manager's Id?"
},
{
    type: "input",
    name: "email",
    message: "What is the Manager's Email?"
},
{
    type: "input",
    name: "office Number",
    message: "What is the Manager's Office Number?"
},

];

inquirer
.prompt(questions)
.then(answers => {
   // const inputAnswers = answers;
    //console.log(inputAnswers);


})
.catch(error => {
    if(error){
        console.log(error);
    }
})

