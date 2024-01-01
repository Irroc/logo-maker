const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)
const { generateLogo } = require('./logoGenerator')
const fs = require('fs');

class CLI { 
    constructor() {
    this.title = '';
     this.tasks = [];
  }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'maxlength-input',
                    name: 'characters',
                    message: 'What is your logos text? (May include up to 3 characters.)',
                    maxLength: 3,
                },
                {
                    message: 'What color would you like the text to have?',
                    name: 'textColor',
                },
                {
                    type:'list',
                    message: 'What shape would you like your logo to have?',
                    choices:['circle', 'triangle', 'square'],
                    name: 'shape',
                },
                {
                    message: "What color would you like your logo's shape to have?",
                    name: 'shapeColor',
                },
            ])
            .then((response) => {
                fs.writeFile('logo.svg', generateLogo(response), (error) => error ? console.error(error) : console.log("Generated logo.svg"))
            })
    }
}

module.exports = CLI;