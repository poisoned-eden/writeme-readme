// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
//https://shields.io/category/license 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function renderTableOfContents(){};

// TODO: Create a function to generate markdown for README
function generateMarkdown(requiredAs, badgesAs, featuresAs, contributeAs, testsAs) {
  var markdown = "";

  // add required fields to markdown
  markdown += `# ${starterAs.title}\n 
    \n
    ## Description\n
    \n
    ${descAs.shortDesc} ${descAs.longDesc}\n
    \n
    ## Installation\n
    \n
    ${requiredAs.installation}\n
    \n
    ## Usage\n
    \n
    ${requiredAs.usage}\n
    \n
    ## Credits\n
    \n
    ${requiredAs.credits}\n
    \n
    ## Licence\n
    \n
    ${requiredAs.license}`;




  console.log(markdown);
}

module.exports = generateMarkdown;
