const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write your description.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you want to install your application?',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would someone use your application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to add?',
        choices: ["Apache", "Boost", "BSD"],
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to your application?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Write out your test instructions.',
      },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter your e-mail and direct GitHub link so users may contact you for questions.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 'utf8', err => {
        if (err) throw err;
        console.log('READ-ME SAVED!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)

  .then(answers => {
    console.log(answers);
    writeToFile('README.md', generateMarkdown(answers));
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
}

// Function call to initialize app
init();