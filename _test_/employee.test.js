//const { expect } = require('@jest/globals');
const { expect } = require('@jest/globals');
const Employee = require('./Employee');

test ('check that an employee is created', () =>{
    let employee = new Employee('name', 'Id', 'email');
    expect(employee.getName()).toMatch('name');
    expect(employee.getId()).toMatch('Id');
    expect(employee.getEmail()).toMatch('email');
    
});