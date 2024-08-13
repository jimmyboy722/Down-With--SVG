const {Triangle, Circle, Square, Circle} = require('./shapes') /* LOADING THE SHAPES.JS FILE */

describe('Triangle', () => {
    test ('Renders an SVG image for a Triangle', () => {
        // FUNCTION TO SET UP AND RENDER A TRIANGLE TO COMPARE EXPECTED AND ACTUAL RESULT 
        const expectedShape = `<polygon points="05,85 45,15 90,85" fill= '${this.color}' />`;
        const Triangle = new Triangle();
        Triangle.setColor('');
        const renderedSvg = Triangle.render();
        // EXPECT METHOD TO TEST WHAT IS RENDERED AGAINST WHAT IS EXPECTED
        expect(renderedSvg).toEqual(expectedShape);
    });
});
// SAME PROCESS FOR THE NEXT TWO SHAPES
describe('Circle', () => {
    test ('Renders an SVG image for a Circle', () => {
        // FUNCTION TO SET UP AND RENDER A CIRCLE TO COMPARE EXPECTED AND ACTUAL RESULT 
        const expectedShape = `<circle cx= '50' cy= 50 r= '50' fill= '${this.color}' />`;
        const Circle = new Circle();
        Circle.setColor('');
        const renderedSvg = Circle.render();
        // EXPECT METHOD TO TEST WHAT IS RENDERED AGAINST WHAT IS EXPECTED
        expect(renderedSvg).toEqual(expectedShape);
    });
});

describe('Square', () => {
    test ('Renders an SVG image for a Square', () => {
        // FUNCTION TO SET UP AND RENDER A SQUARE TO COMPARE EXPECTED AND ACTUAL RESULT 
        const expectedShape = `<rect X= '120' width= '150' height= '150' rx= '20' fill= '${this.color}' />`;
        const Square = new Square();
        Square.setColor('');
        const renderedSvg = Square.render();
        // EXPECT METHOD TO TEST WHAT IS RENDERED AGAINST WHAT IS EXPECTED
        expect(renderedSvg).toEqual(expectedShape);
    });
});