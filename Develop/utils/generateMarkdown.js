// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `<h1># ${data.title}</h1>

## Description
${data.description};

## Table of Contents
-[Description](#description)
-[Installation](#installation);
-[Usage](#installation);
-[License](#installation);
-[Contributing](#installation);
-[Tests](#installation);
-[Questions](#questions)

## Installation
Installation instructions:
${data.installation}

## Usage
${data.usage}

## License
This application is ${data.license} license.

## Contributing
${data.contributing} contributed to this project.

## Tests
${data.tests}

## Questions
Have any questions? ${data.questions}
Shoot me an email at ${data.email}
Check me out on GitHub! [${data.username}](https://github.com/${data.username})
Generated with [README-generator](https://github/dmerk2/Professional-README-Generator)

`;
}

module.exports = generateMarkdown;
