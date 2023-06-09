// TODO: Include packages needed for this application
const markdownify = require("./utils/generateMarkdown.js");
const questionnaire = require('./utils/questions.js');
const inquirer = require('inquirer');

function print(something) {
    console.log("-------");
    console.log(something);
    console.log("_______");
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
       
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

    markdownify(requiredAs, badgesAs, featuresAs, contributeAs, testsAs);

}
// Function call to initialize app
init();