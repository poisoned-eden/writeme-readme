// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
//https://shields.io/category/license 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {};

function renderTableOfContents() {
  var table = `## Table of Contents\n
\n
`;
  
  return table;
};

function renderBadges(badgesAs) {};

// TODO: Create a function to generate markdown for README
function generateMarkdown(requiredAs, badgesAs, featuresAs, contributeAs, testsAs) {
  var markdown = "";

  // add title and description to markdown
  markdown += `# ${requiredAs.title}\n 
\n
## Description\n
\n
${requiredAs.description}\n
\n`

  // add table of contents  
  if(requiredAs.optionalSections.includes("Table of Contents")) {
    markdown += renderTableOfContents();
  };  
  
  // add other required information
  markdown += `## Installation\n
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
${requiredAs.licence}\n
\n`;

  // add optional fields to markdown
  if(badgesAs.badges.length>0) {
    markdown += badgesAs.badges;
  };

  if(featuresAs.length>0) {
    markdown += featuresAs.features; 
  };

  if(contributeAs.length>0) {
    markdown += contributeAs.contribute;
  };

  if(testsAs.length>0) {
    markdown += testsAs.tests;
  };

  console.log(markdown);
}

module.exports = generateMarkdown;
