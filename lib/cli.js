const inquirer = require('inquirer');
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
                    message: 'What is your logos text? (May include up to 3 characters.)',
                    name: 'characters',
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
                generateLogo(response)
                console.log(generateLogo(response))
            })
    }
}

module.exports = CLI;