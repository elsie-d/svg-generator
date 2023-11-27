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
  
  
   module.exports = Shapes;