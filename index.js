const { default: inquirer } = require('inquirer')

console.log('hello world!')

inquirer = require('inquirer')
fs = require('fs')
svgBuilder = require('svg-builder')


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered


const questions = [
    {
        type: 'input',
        message: "Enter up to 3 characters for logo",
        name: 'text',
        default: '',
        validate: function (answer) {
            if (answer.length > 3) {
                return console.log("You are limitted to three characters");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Indiacte text color (keyword or hexidecimal number)",
        name: 'text-color',
        default: '',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Color required");
            }
            return true;
        }
    },
    {
        type: 'list',
        message: "Chose shape:",
        name: 'shape',
        choices: ['circle', 'triangle', 'square']
    }, 
    {
        type: 'input',
        message: "Indiacte shape color (keyword or hexidecimal number)",
        name: 'shape-color',
        default: '',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Color required");
            }
            return true;
        }
    }
    
]