// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
const { default: Choice } = require('inquirer/lib/objects/choice');
// TODO: Create an array of questions for user input
const questions = ['What is the title of the project?', 'Enter description:' , 'Enter installation instructions:' , 'Enter usage information:' , 'Enter contribution guidelines:' , 'Enter test instructions:', 'Choose a license for the application:', 'What is your Github username?', 'What is your email address?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(`${fileName} has been created!`);
    fs.writeFile('README.md', data, (err) => {
        if(err) {
            console.log(err);
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    console.log('hello');
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'usageInformation',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[4],
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: questions[5],
        },
        {
            type: 'list',
            name: 'license',
            message: questions[6],
            choices: ['Public Domain License', 'LGPL', 'Permissive', 'Copyleft', 'Proprietary'],
        },
        {
            type: 'input',
            name: 'username',
            message: questions[7],
        },
        {
            type: 'input',
            name: 'email',
            message: questions[8],
        },
    ])
    .then((response) => writeToFile('Generated ReadMe', 
`# ${response.title}

# Table of Contents:
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

# Description: 
${response.description}

# Installation:
${response.installationInstructions}

# Usage:
${response.usageInformation}

# Contributing:
${response.contribution}

# Tests:
${response.testInstructions}

# License:
${response.license}

# Questions:
Github Profile?
[Link to Github](https://www.github.com/${response.username})
How can you reach me?
${response.email}
`))
}

// Function call to initialize app
init();
