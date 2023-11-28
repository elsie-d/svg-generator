const fs = require('fs')

// Exports `Triangle`, `Circle`, and `Square` classes

// Parent
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
    super(fillColor, txt, txtColor)
  } 
    render() {
      return `<svg version="1.1" width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <polygon points="100, 15 200, 200 0, 200" fill="${this.fillColor}"/>
      <text x="100" y="185" font-size="50" text-anchor="middle" fill="${this.txtColor}">${this.txt}</text>
  </svg>`
  };
  
}
class Circle extends Shapes {
  constructor(fillColor, txt, txtColor) {
    super(fillColor, txt, txtColor)
  } 
     render() {
     return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
     <circle cx="150" cy="100" r="100" fill="${this.fillColor}" />
     <text  x="150" y="130"  font-size="70" text-anchor="middle" fill="${this.txtColor}">${this.txt}</text>
     </svg>`
   } 
 }

class Square extends Shapes {
constructor(fillColor, txt, txtColor) {
  super(fillColor, txt, txtColor)
} 
    render() {
      return `
      <svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="${this.fillColor}"  x="60" y="20"/>   
      <text x="150" y="130"  font-size="70" text-anchor="middle" fill="${this.txtColor}">${this.txt}</text>
      </svg>`
    } 
 }



 // Create Requested Shape & Text

  function generateShape(answer){
    console.log(answer)
  if(answer.shape === "Triangle"){
    let reqShape = new Triangle (answer.shapeColor, answer.text, answer.textColor)
    return reqShape.render();
  }
  if(answer.shape === "Circle"){
    console.log('circle')
    let reqShape = new Circle (answer.shapeColor, answer.text, answer.textColor)
    return reqShape.render();
  }
  if(answer.shape === "Square"){
    let reqShape = new Square (answer.shapeColor, answer.text, answer.textColor)
    return reqShape.render();
  }
 };

 function generateSVG(answer){
  const svg = generateShape(answer);
  console.log(svg)
  fs.writeFile("./examples/logo.svg", svg, () => console.log('SVG File is ready'))

 };

module.exports = { Shapes, generateSVG }