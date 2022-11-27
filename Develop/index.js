// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")

// TODO: Create an array of questions for user input
const questions = [
    "Name",
    "Description",
    "Installation Instructions",
    "Usage Information",
    "Contribution Guidlines",
    "Test Instructions",
];
const inquirerQuestions = questions.map(it => {
    return{
        type: "input",
        name: it,
        message: it,
    };
})
async function askQuestions(){
    inquirer.prompt(inquirerQuestions)
}
askQuestions()
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();







