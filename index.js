const markdownify = require("./utils/generateMarkdown.js");
const questionnaire = require('./utils/questions.js');
const inquirer = require('inquirer');
const fs = require('fs');


function createFolder(title) {
    fs.mkdir(`./output/${title}`, { recursive: true }, (error) => 
        error ? console.error(error) : console.log(`Folder created for ${title}`)
    )
};

function writeToFile(title, markdown) {
    fs.writeFile(`./output/${title}/README.md`, markdown, (error) => 
        error ? console.error(error) : console.log('Written to README')
    )
};

function storeAnswers(title, answers) {
    let stringAnswers = JSON.stringify(answers);
    fs.writeFile(`./output/${title}/answers.json`, stringAnswers, (error) =>
        error ? console.error(error) : console.log('Answers stored to JSON file')
    );
};


async function init() {
       
    const starterAs = await inquirer.prompt(questionnaire.starterQs);

    var badgesAs = {};
    if(starterAs.optionalSections.includes("Badges")) {
        badgesAs = await inquirer.prompt(questionnaire.badgesQs);
    };
    
    var featuresAs = {};
    if(starterAs.optionalSections.includes("Features")) {
        featuresAs = await inquirer.prompt(questionnaire.featuresQ);
    };

    var contributeAs = {};
    if(starterAs.optionalSections.includes("How to Contribute")) {
        contributeAs = await inquirer.prompt(questionnaire.contributeQs);
    };
    
    var testsAs = {};
    if(starterAs.optionalSections.includes("Tests")) {
        testsAs = await inquirer.prompt(questionnaire.testsQs);
    };
    
    var questionsAs = {};
    if(starterAs.optionalSections.includes("Questions")) {
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

    await createFolder(answers.title); 
    await writeToFile(answers.title, markdown);
    await storeAnswers(answers.title, answers);

};

init();