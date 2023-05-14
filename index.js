// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');
const path = require('path');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please list your Table of Contents.',
        name: 'toc'
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What are the usage instructions?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Whom or what would you like to credit?',
        name: 'credit'
    },
    {
        type: 'input',
        message: 'What license are you using?',
        name: 'license'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then((responses) => {
        writeToFile('./generated-readme/README.md', generateMarkdown({...responses}))
        console.log('Your README has been generated!')
    })
}

// Function call to initialize app
init();
