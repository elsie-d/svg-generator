// Jest tests for shapes

const { Circle, Square, Triangle} = require('./shapes.js')

//Circle Test
describe('Circle', () =>{
    it('Should creata a green circle with red XMS text', () =>{
        const shape = new Circle('green', 'XMS', 'red');
        var fillColor= "green"
        var txtColor = "red"
        var txt = "XMS"

        expect(shape.render()).toEqual(
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="100" fill="${fillColor}" />
<text  x="150" y="130"  font-size="70" text-anchor="middle" fill="${txtColor}">${txt}</text></svg>`);

    })
});


//Square Test
describe('Square', () =>{
    it('Should create a pink sqare with purple PNK text', () =>{
        const shape = new Square('pink', 'PNK', 'purple');
        var fillColor= "pink"
        var txtColor = "purple"
        var txt = "PNK"

        expect(shape.render()).toEqual(
`<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="200" fill="${fillColor}"  x="60" y="20"/>   
<text x="150" y="130"  font-size="70" text-anchor="middle" fill="${txtColor}">${txt}</text></svg>`);

    })
});


//Triangle Test
describe('Triangle', () =>{
    it('Should create a blue triangle/polygon with white SKY txt', () =>{
        const shape = new Triangle('blue', 'SKY', 'white');
        var fillColor= "blue"
        var txtColor = "white"
        var txt = "SKY"

        expect(shape.render()).toEqual(
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="100, 15 200, 200 0, 200" fill="${fillColor}"/>
<text x="100" y="185" font-size="50" text-anchor="middle" fill="${txtColor}">${txt}</text></svg>`);

    })
}); 











