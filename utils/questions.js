const requiredQs = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a short description explaining the what, why and how of the project.'
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
        name: 'licence',
        message: 'Which licence do you want to use?',
        choices: ['The MIT Licence', 'The Apache Licence', 'The GPL 3.0 Licence']
    },
    {
        type: 'checkbox',
        name: 'optionalSections',
        message: 'Which optional sections would you like to include in the ReadMe?',
        choices: ["Badges", "Features", "How to Contribute", "Tests"],
    }
]

const badgesQs = [
    {
        type: 'checkbox',
        name: 'badges',
        message: 'Which badges would you like to add to the ReadMe?',
        choices: ["HTML", "JavaScript", "CSS", "Profile Badge", "Watch counter"],
    }
] 

const featuresQ = [
    {
        type: 'input',
        name: 'feature',
        message: 'Please describe the features of your project.',
    }
] 

const constributeQs = [
    {
        type: 'checkbox',
        name: 'optionalSections',
        message: 'Which optional sections would you like to include in the ReadMe?',
        choices: ["Badges", "Features", "How to Contribute", "Tests"],
    }
] 
const testsQs = [
    {
        type: 'checkbox',
        name: 'optionalSections',
        message: 'Which optional sections would you like to include in the ReadMe?',
        choices: ["Badges", "Features", "How to Contribute", "Tests"],
    }
] 



module.exports = {requiredQs, badgesQs, featuresQ, constributeQs, testsQs};