// Runs the application using imports from lib/

const inquire = require('inquirer')
const { generateSVG} = require('./lib/shapes')
console.log(generateSVG)

// GIVEN a command-line application that accepts user input //
// WHEN I am prompted for text //
// THEN I can enter up to three characters //
// WHEN I am prompted for the text color //
// THEN I can enter a color keyword (OR a hexadecimal number) //
// WHEN I am prompted for a shape //
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square //
// WHEN I am prompted for the shape's color //
// THEN I can enter a color keyword (OR a hexadecimal number) //
// WHEN I have entered input for all the prompts  //
// THEN an SVG file is created named `logo.svg` //
// AND the output text "Generated logo.svg" is printed in the command line //
// WHEN I open the `logo.svg` file in a browser //
// THEN I am shown a 300x200 pixel image that matches the criteria I entered //


const questions = 
    [{
        type: 'input',
        message: "Enter up to 3 characters for a logo:",
        name: 'text',
        default: '',
        validate: function (answer) {
            if (answer.length > 3) {
                return console.log("\n ALERT: You are limitted to three characters, please try again");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Indiacte a prefered logo text color (keyword or hexidecimal number):",
        name: 'textColor',
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
        message: "Chose shape from the available shapes:",
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square']
    }, 
    {
        type: 'input',
        message: "Indiacte shape color (keyword or hexidecimal number)",
        name: 'shapeColor',
        default: '',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Color required");
            }
            return true;
        }
    }]



   
    function init() {
        inquire.prompt(questions)
        .then((answer) => {generateSVG(answer) })
        .catch(error => {console.log(error)})    
    };
      
   init();     
    
 