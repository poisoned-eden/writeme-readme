// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licence) {
  var licenceBadge = "";

  switch (licence) {
    case 'The MIT Licence':
      licenceBadge += "![](https://img.shields.io/badge/license-MIT-green)";
      break;
    case 'The Apache Licence':
      licenceBadge += "![](https://img.shields.io/badge/license-Apache-blue)";
      break;
    case 'The GPL 3.0 Licence':
      licenceBadge += "![](https://img.shields.io/badge/license-GPL-red)";
      break;
  }

  return licenceBadge;
}
//https://shields.io/category/license 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licence) {
  var licenceLink = "";

  switch (licence) {
    case 'The MIT Licence':
      licenceLink += "[The MIT Licence](LICENSE)";
      break;
    case 'The Apache Licence':
      licenceLink += "[APACHE LICENSE, VERSION 2.0](LICENSE)";
      break;
    case 'The GNU GPL 3.0 Licence':
      licenceLink += "[GNU General Public License v3.0](LICENSE)";
      break;
  };

  return licenceLink;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licence) {
  var licenceSection = `\n
\n
## Licence\n
\n
${renderLicenseBadge(licence)}\n
${renderLicenseLink(licence)}`

  return licenceSection;

};

function renderTableOfContents() {
  var table = `\n
\n
## Table of Contents
`;
  


  return table;
};

function renderBadges(badgesAs) {};

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  console.log("ANSWERS");
  console.log(answers);

  var markdown = "";

  // add title and description to markdown
  markdown += `# ${answers.title}\n 
\n
## Description\n
\n
${answers.description}`

  // add table of contents  
  if(answers.optionalSections.includes("Table of Contents")) {
    markdown += renderTableOfContents();
  };  

  // add other required information
  markdown += `\n\n
## Installation\n\n
${answers.installation}\n\n
## Usage\n\n
${answers.usage}
${renderLicenseSection(answers.licence)}\n\n
## Credits\n\n
${answers.credits}`;

  if(answers.optionalSections.includes("Badges")) {
    markdown += renderBadges();
  };  

  if(answers.optionalSections.includes("Features")) {
    markdown += `\n
\n
## Features\n
\n
${answers.features}`; 
  };

  if(answers.optionalSections.includes("How to Contribute")) {
    markdown += `\n
\n
## Contributions\n
\n
${answers.contribute}`;
  };

  if(answers.optionalSections.includes("Tests")) {
    markdown += `\n
\n
## Tests\n
\n
${answers.tests}`;
  };

  console.log(markdown);
  return markdown;
}

module.exports = generateMarkdown;
