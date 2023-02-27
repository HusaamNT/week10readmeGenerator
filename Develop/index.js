// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")

// TODO: Create an array of questions for user input
const questions = [
    "name",
    "description",
    "installationInstructions",
    "usageInformation",
    "contributionGuidlines",
    "testInstructions",
];
const inquirerQuestions = questions.map(it => {
    return{
        type: "input",
        name: it,
        message: it,
    };
})
async function askQuestions(){
   return await inquirer.prompt(inquirerQuestions)
}
async function collectAndGenerateFile(){
    const response = await askQuestions()
    console.log(response)
}

async function generateFile(answers){
    console.log(answers)
}

const presetNames = {
name: 'name',
description: 'desc',
installationInstructions: 'install',
usageInformation: 'use',
contributionGuidlines: 'cont',
testInstructions: 'test'
}

// generateFile(presetNames)

collectAndGenerateFile()
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readMe = `
    # ${data.name}

    ${data.description}

    ## Installation
    ${data.installationInstructions}

    ## Usage
    ${data.usageInformation}

    ## Contribution Guidlines
    ${data.testInstructions}
    `;

    fs.writeFile(`${fileName}.md`, readMe, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('README.md file created!');
        }
    })
}


// TODO: Create a function to initialize app
async function init() {
    await generateFile(presetNames)  
    console.log("hello") 
    const fileName = answers.name
    await writeToFile(fileName, answers)
    console.log("hi")
}

// Function call to initialize app
init();







