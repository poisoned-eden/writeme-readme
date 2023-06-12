// TODO: Include packages needed for this application
const markdownify = require("./utils/generateMarkdown.js");
const questionnaire = require('./utils/questions.js');
const inquirer = require('inquirer');
const fs = require('fs');


function print(something) {
    console.log("-------");
    console.log(something);
    console.log("_______");
}

// TODO: Create a function to write README file
function writeToFile(title, markdown) {
    fs.mkdir(`./output/${title}`, { recursive: true }, (err) => {
        if (err) throw err}
    );
    fs.writeFile(`./output/${title}/README.md`, markdown, (error, data) =>
    error ? console.error(error) : console.log(data));
};

// TODO: Create a function to initialize app
async function init() {
       
    const starterAs = await inquirer.prompt(questionnaire.starterQs);

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
        contributeAs = await inquirer.prompt(questionnaire.contributeQs);
    };
    
    var testsAs = {};
    if(starterAs.optionalSections.includes("Tests")) {
        print("Tests");
        testsAs = await inquirer.prompt(questionnaire.testsQs);
    };
    
    var questionsAs = {};
    if(starterAs.optionalSections.includes("Questions")) {
        print("Tests");
        questionsAs = await inquirer.prompt(questionnaire.questionsQs);
    };

    var answers = {
        ...starterAs,
        ...badgesAs,
        ...featuresAs,
        ...contributeAs,
        ...testsAs,
        ...questionsAs
    };

    const markdown = markdownify(answers);

    writeToFile(answers.title, markdown);

}
// Function call to initialize app
init();