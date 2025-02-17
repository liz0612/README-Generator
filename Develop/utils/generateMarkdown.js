function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'GPLv3') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'Apache 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-red.svg)';
  }
  return '';
}

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === 'GPLv3') {
    return '[GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'Apache 2.0') {
    return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
  }
  return '';
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
This project is licensed under the ${license} license.  
More info: ${renderLicenseLink(license)}`;
  }
  return '';
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Find me on GitHub: [${data.github}](https://github.com/${data.github})  
For additional questions, email me at: ${data.email}
`;
}

module.exports = generateMarkdown;
