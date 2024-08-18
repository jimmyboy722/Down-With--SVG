// PARENT CLASS
// LEAVING THE COLOR AS AN EMPTY STRING TO BE POPULATED BY PROMPTED QUESTION
class Shape {
  constructor() {
    this.color = "";
  }
  /* ADDED METHOD WITH COLOR AS THE PARAMETER TO SET THE COLOR PROPERTY
     OF THE INSTANCE TO THE VALUE PASSED TO THE COLOR PARAMETER */
  pickColor(color) {
    this.color = color;
  }
}

/* USING THE EXTEND METHOD FOR EACH SPECIFIC SHAPE CLASS TO GET THIS.COLOR PROPERTY FROM PARENT 
CLASS 'SHAPE' THROUGH INHERITANCE */
class Triangle extends Shape {
  render() {
    return `<polygon points="05,85 45,15 90,85" fill= '${this.color}' />`;
  }
}
// COLORS APPLIED VIA THE FILL PROPERTY
class Circle extends Shape {
  render() {
    return `<circle cx= '50' cy= '50' r= '50' fill= '${this.color}'  />`;
  }
}
// MADE THE SQUARE WITH ROUNDED CORNERS FOR A LITTLE FLARE
class Square extends Shape {
  render() {
    return `<rect X= '120' width= '150' height= '150' rx= '20' fill= '${this.color}' />`;
  }
}
// EXPORTING THESE CLASSES AS AN OBJECT FOR USE IN OTHER FILES
module.exports = { Triangle, Circle, Square };
