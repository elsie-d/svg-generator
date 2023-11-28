// Runs the application using imports from lib/

const { error } = require('console');

//const { default: inquirer } = require('inquirer')

console.log('hello world!')
const inquire = require('inquirer')
const {Shapes, generateSVG} = require('./lib/shapes')
const fs = require('fs')
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
// WHEN I have entered input for all the prompts  
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered


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



/* // Parent
class Shapes {
    constructor(fillColor, txt, txtColor) {
      this.fillColor = fillColor;
      this.txt = txt;
      this.txtColor = txtColor;
    } 
    render() {console.log('ALERT: No shape detected, cannot render')}
  }
  

// Children/ Extensions of Parent

  class Triangle extends Shapes {
    constructor(fillColor, txt, txtColor) {
      super(fillColor);
      super(txt);
      super(txtColor);
    } 
      render() {
        return ` <svg version="1.1" 
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="${this.fillColor}"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.txtColor}">${this.txt}</text>
    </svg>`
    };
    
  }
  class Circle extends Shapes {
    constructor(fillColor, txt, txtColor) {
      super(fillColor);
      super(txt);
      super(txtColor);
    } 
       render() {
       return `<svg version="1.1" 
       width="300" height="200"
       xmlns="http://www.w3.org/2000/svg">
       <circle cx="150" cy="100" r="100" fill="${this.fillColor}" />
       <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.txtColor}">${this.txt}</text>
       </svg>`
     } 
   }

class Square extends Shapes {
  constructor(fillColor, txt, txtColor) {
    super(fillColor);
    super(txt);
    super(txtColor);
  } 
      render() {
        return `
        <svg version="1.1" 
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.fillColor}"/>   
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.txtColor}">${this.txt}</text>
        </svg>`
      } 
   }
  


   // Create Requested Shape & Text
  
    function generateShape(answer){
    if(answer.shape === Triangle){
      let reqShape = new Triangle (answer.fillColor, answer.txt, answer.txtColor)
      return reqShape.render();
    }
    if(answer.shape === Circle){
      let reqShape = new Circle (answer.fillColor, answer.txt, answer.txtColor)
      return reqShape.render();
    }
    if(answer.shape === Square){
      let reqShape = new Square (answer.fillColor, answer.txt, answer.txtColor)
      return reqShape.render();
    }
   }; 
   
   function generateSVG(answer){
    const svg = generateShape(answer);
    fs.writeFile("./examples/logo.svg", svg, () => console.log('SVG File is ready'))

   }; */


   
    function init() {
        inquire.prompt(questions)
        .then((answer) => {generateSVG(answer) })
        .catch(error => {console.log(error)})    
    };
      
   init();     
    
 