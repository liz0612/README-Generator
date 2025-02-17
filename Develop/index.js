const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a license:',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How do you run tests?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email for questions:',
  },
];

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
  console.log('README.md has been generated!');
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
  });
}

init();