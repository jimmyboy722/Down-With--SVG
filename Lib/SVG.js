class SVG {
  constructor() {
    // THESE PROPERTIES ARE SER TO EMPTY STRINGS AND WILL HOLD SVG ELEMENTS FOR TEXT AND SHAPES
    this.textEl = "";
    this.shapeEl = "";
  }

  render() {
    // RETURNS A THE STRING REPRESENTING THE SVG ELEMENT
    return `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"> ${this.shapeElement} ${this.textElement} </svg>`;
  }
  // CREATING THE TEXT PROPERTY INCLUDING FONT SIZE, COLOR, AND LOCATION WITHIN THE SVG

  createText(message, color) {
    if (message.length > 3) {
      throw new Error("Maximum characters for message is 3.");
    } else {
      this.textEl = `< text y="100" x="100"  font-size="30" text-anchor="middle" fill="${color}">${message}</text>`;
      console.log("It worked!");
    }
  }
  // CREATING THE SVG SHAPE
  createShape(shape) {
    this.shapeEl = shape.render();
  }
}

// EXPORTING THIS CLASS SO IT'S AVAILABLE FOR IMPORT IN OTHER FILES
module.exports = SVG;
