// FIRST SETTING UP IMPORTS
const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const SVG = require("./SVG");
const { Triangle, Circle, Square } = require("./shapes");
const { run } = require("jest");
const { error } = require("console");

function Terminal() {
  return (
    inquirer
      // GROUP OF QUESTIONS REQUIRING INPUT FOR RENDERING OOF SVG'S
      .prompt([
        {
          name: "shape",
          type: "list",
          message: "Pick an SVG shape",
          choices: ["circle", "square", "triangle"],
        },
        {
          name: "shapeColor",
          type: "input",
          message: "Select a color for your shape",
        },
        {
          name: "text",
          type: "input",
          message:
            "Please enter message to insert into SVG (no more than 3 characters.)",
          confirmText: (text) =>
            text.length <= 3 || "Text must not be more than 3 characters",
        },
        {
          name: "textColor",
          type: "input",
          message: "Select a text color",
        },
      ])
      //USING A THEN METHOD CHAINED TO A PROMISE TO LINK PRODUCING AND CONSUMING CODE / PLACE HOLDER FOR EXPECTED DATA
      // USING AN ARROW FUNCTION AS AN ARGUMENT THAT WILL BE EXECUTED ONCE THE PROMISE IS RESOLVED
      .then(({ shape, shapeColor, text, textColor }) => {
        let shapeType;
        //switch statement used to determine the type of shape to create
        switch (shape) {
          case "triangle":
            shape = new Triangle();
            break; // to ensure the switch statements are exited after completion

          case "circle":
            shape = new Circle();
            break;

          case "square":
            shape = new Square();
            break;
        }
        //pickColor method called to set color of the SVG
        shape.pickColor(shapeColor);
        // Creating and configuring SVG images
        const svg = new SVG();
        svg.createText(text, textColor);
        svg.createShape(shape);
        // Writing the SVG to a logo.svg file per challenge instructions
        return writeFile("logo.svg", svg.render());
      })
      // Chaining another .then method to log successful image generation
      .then(() => {
        console.log("SVG generation successful!");
      })
      // Catch method for error reporting
      .catch((error) => {
        console.log(error);
        console.log("Image could not be properly generated!");
      })
  );
}

module.exports = Terminal;
