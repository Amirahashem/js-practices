/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/

for(let i = 0; i < 100; i++) {
  //Create elements
let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myParagraph = document.createElement("p");

//Create Texts
let headingText = document.createTextNode(`Product Title ${i + 1}`);
let paragraphText = document.createTextNode("Product Description");

//Add Texts To Elements
myHeading.appendChild(headingText);
myParagraph.appendChild(paragraphText);

//Add Class To Main Element
myMainElement.className = "product";

//Add Heading and Paragraph To Main Element
myMainElement.appendChild(myHeading);
myMainElement.appendChild(myParagraph);

//Add Main Element To Body
document.body.appendChild(myMainElement);
document.writeln("<hr>");
}
