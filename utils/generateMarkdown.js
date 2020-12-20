// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if('Apache') {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if ('Boost') {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } else if ('BSD') {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return "This application is covered under " + (data.license)
  } else if (''){
    return '';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description of Application 
    ${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)
* [Testing](#test)
* [Contact](#questions)
  ## How to Use This Application
    ${data.usage}
  ## Contributors to this Application
    ${data.contributors}
  ## Licenses 
    ${data.license}
    ${renderLicenseSection(data.license)}
  ## How to Test This Application
     ${data.test}
  ## Do You Have Qusetions?
     ${data.questions}
`;
}

module.exports = generateMarkdown;
