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
## Licence\n
${renderLicenseBadge(licence)}\n
${renderLicenseLink(licence)}`

  return licenceSection;

};

function renderTableOfContents(answers) {
  
  
  var table = `\n
\n
## Table of Contents
`;
  
  Object.keys(answers).forEach(section => {
      switch (section) {
        case "title":
          break;
        case "description":
          break;
        case "installation":
          table += `\n- [Installation](#Installation)`;
          break;
        case "usage":
          table += `\n- [Usage](#Usage)`;
          break;
        case "credits":
          table += `\n- [Credits](#Credits)`;
          break;
        case "licence":
          table += `\n- [Licence](#Licence)`;
          break;
        case "optionalSections":
          break;
        case "repo": 
          table += `\n- [Badges](#Badges)`;
          break;
        case "features":
          table += `\n- [Features](#Features)`;
          break;
        case "contribute":
          table += `\n- [Contributions](#Contributions)`;
          break;
        case "tests":
          table += `\n- [Tests](#Tests)`;
          break;
        case "email":
          table += `\n- [Questions](#Questions)`;
          break;
      }
  });

  return table;
};

function renderBadges(answers) {
  var { user, repo } = answers;
  
  var badges = `\n
\n
## Badges\n
![GitHub language count](https://img.shields.io/github/languages/count/${user}/${repo})\n
![GitHub top language](https://img.shields.io/github/languages/top/${user}/${repo})\n
![GitHub Repo stars](https://img.shields.io/github/stars/${user}/${repo}?style=social)\n
![GitHub watchers](https://img.shields.io/github/watchers/${user}/${repo}?style=social)\n
![GitHub followers](https://img.shields.io/github/followers/${user}?style=social)\n`
  
  return badges;
};

function renderQuestions(answers) {
  return `\n\n## Questions\nGithub profile: [${answers.user}](${answers.user})\n
  [${answers.email}](${answers.email})\n
  ${answers.reachMe}`
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  console.log("ANSWERS");
  console.log(answers);

  var markdown = "";

  // add title and description to markdown
  markdown += `# ${answers.title}\n 
\n
## Description\n
${answers.description}`

  // add table of contents  
  if(answers.optionalSections.includes("Table of Contents")) {
    markdown += renderTableOfContents(answers);
  };  

  // add other required information
  markdown += `\n\n
## Installation\n
${answers.installation}\n\n
## Usage\n
${answers.usage}
${renderLicenseSection(answers.licence)}\n\n
## Credits\n
${answers.credits}`;

  if(answers.optionalSections.includes("Badges")) {
    markdown += renderBadges(answers);
  };  

  if(answers.optionalSections.includes("Features")) {
    markdown += `\n
\n
## Features\n
${answers.features}`; 
  };

  if(answers.optionalSections.includes("How to Contribute")) {
    markdown += `\n
\n
## Contributions\n
${answers.contribute}`;
  };

  if(answers.optionalSections.includes("Tests")) {
    markdown += `\n
\n
## Tests\n
${answers.tests}`
  };

  if(answers.optionalSections.includes("Questions")) {
    markdown += renderQuestions(answers);
  };

  console.log(markdown);
  return markdown;
}

module.exports = generateMarkdown;
