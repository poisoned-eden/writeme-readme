const starterQs = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'checkbox',
        name: 'optionalSections',
        message: 'Which optional sections would you like to include in the ReadMe?',
        choices: ["Badges", "Features", "How to Contribute", "Tests"],
    },
    {
        type: 'list',
        name: 'descriptionType',
        message: 'What type of description would you like to use?',
        choices: ['short', 'long'],
    },
]

const shortDescQs = [
    {
        type: 'input',
        name: 'shortDesc',
        message: 'Please enter a short description explaining the what, why and how of the project.'
    }
]

const longDescQs = [
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
    }
]

const requiredQs = [
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
        choices: ['The MIT Licence', 'The Apache Licence', 'The GPL 3.0 Licence']
    },
]

const badgesQs = [
    {
        type: 'checkbox',
        name: 'badges',
        message: 'Which badges would you like to add to the ReadMe?',
        choices: ["HTML", "JavaScript", "CSS", "Profile Badge", "Watch counter"],
    }
] 

const featureQ = [
    {
        type: 'input',
        name: 'feature',
        message: 'Please describe one feature. (You will have the chance to add more)',
    }
] 

const anotherFeature = [
    {
        type: 'checkbox',
        name: 'anotherFeature',
        message: 'Add another feature?',
        choices: [
            {name: "yes",
            checked: true},
            {name: "no"}
        ]
    },
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



module.exports = {starterQs, shortDescQs, longDescQs, requiredQs, badgesQs, featureQ, anotherFeature, constributeQs, testsQs};