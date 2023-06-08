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
async function init() {
    const starterAs = await inquirer.prompt(questionnaire.starterQs);
    
    var descAs = {};
    if(starterAs.descriptionType == 'short') {
        print('short');
        descAs = await inquirer.prompt(questionnaire.shortDescQs);
    } else {
        print('long');
        descAs = await inquirer.prompt(questionnaire.longDescQs);
    };
    
    const requiredAs = await inquirer.prompt(questionnaire.requiredQs);

    var badgesAs = {};
    if(starterAs.optionalSections.includes("Badges")) {
        print("Badges");
        badgesAs = await inquirer.prompt(questionnaire.badgesQs);
    };
    
    var featuresAs = {};
    if(starterAs.optionalSections.includes("Features")) {
        print("Features");
        featuresAs = await inquirer.prompt(questionnaire.featuresQ);
    };

    var contributeAs = {};
    if(starterAs.optionalSections.includes("How to Contribute")) {
        print("Contributions");
        contributeAs = await inquirer.prompt(questionnaire.constributeQs);
    };
    
    var testsAs = {};
    if(starterAs.optionalSections.includes("Tests")) {
        print("Tests");
        testsAs = await inquirer.prompt(questionnaire.testsQs);
    };

}
// Function call to initialize app
init();

// set it to ask if like to make new readme or edit what already saved
// find a way of saving answers as go along - use editor type inquirer question?