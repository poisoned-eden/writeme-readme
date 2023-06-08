// TODO: Include packages needed for this application
const markdownify = require("./utils/generateMarkdown.js");
const questionnaire = require('./utils/questions.js');
const inquirer = require('inquirer');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questionnaire.starterQs);
}

// Function call to initialize app
init();

// set it to ask if like to make new readme or edit what already saved
// find a way of saving answers as go along - use editor type inquirer question?