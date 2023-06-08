// TODO: Include packages needed for this application
const markdownify = require("./utils/generateMarkdown.js");
const questionnaire = require('./utils/questions.js');
const inquirer = require('inquirer');

function print(something) {
    console.log("-------");
    console.log(something);
    console.log("_______");
}

var storeResponses = {};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questionnaire.starterQs)
        .then((starterAs) => {
            print(starterAs);
            askForDescription(starterAs);
            storeResponses.starterAs = starterAs;
        });
}
// Function call to initialize app
init();

function askForDescription(starterAs) {
    if(starterAs.descriptionType == 'short'){
        print('short');
        inquirer
            .prompt(questionnaire.shortDescQs)
            .then((shortDescAs) => {
                print(shortDescAs);
                storeResponses.shortDescAs = shortDescAs;
            });
    } else {
        print('long');
        inquirer
            .prompt(questionnaire.longDescQs)
            .then((longDescAs) => {
                print(longDescAs);
                storeResponses.longDescAs = longDescAs;
                print(storeResponses);
            });
    }

    // print(storeResponses);
}

// set it to ask if like to make new readme or edit what already saved
// find a way of saving answers as go along - use editor type inquirer question?