const questions = [
    {
        type: 'checkbox',
        name: 'optionalSections',
        message: 'Which optional sections would you like to include in the ReadMe?',
        choices: ["Badges", "Features", "How to Contribute", "Tests"],
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'list',
        name: 'descriptionType',
        message: 'What type of description would you like to use?',
        choices: ['short', 'long'],
    },
    {
        type: 'input',
        name: 'shortDesc',
        message: 'Please enter a short description explaining the what, why and how of the project.'
    },
    {
        type: 'input',
        name: 'descMotivation',
        message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'descWhy',
        message: 'Why did you build this project?',
    },
    {
        type: 'input',
        name: 'descProblem',
        message: 'What problem does this project solve?',
    },
    {
        type: 'input',
        name: 'descLearn',
        message: 'What did you learn whilst building this project?',
    },
    {
        type: 'input',
        name: 'descStandOut',
        message: 'What makes your project stand out?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators',
    },
    {
        type: 'list',
        name: 'Licence',
        message: 'Which licence do you want to use?',
        choices: ['The MIT Licence', 'The Apache Licence', 'The GPL Licence']
    },
];

module.exports = {questions};