const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./library/shapes.js");
const fs = require("fs");
const terminalInput = [
    {
        type: "input",
        name: "text",
        question: "Please enter three characters for your logo: "
    },
    {
        type: "input",
        name: "colorOfText",
        question: "Enter a color for your logo text: "
    },
    {
        type: "list",
        name: "shape",
        question: "Please enter a shape for your logo (circle, triangle, or square): ",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        name: "colorOfShape",
        question: "Please enter a color for the shape entered:  "
    }
];

async function start() {
    const userInput = await inquirer.prompt(terminalInput);

    if(userInput.shape === "Circle"){
        const circle = new Circle(userInput.text, userInput.colorOfText, userInput.colorOfShape); 
        fs.writeFileSync("./Example/logo.svg", circle.render());
    } else if (userInput.shape === "Square"){
        const square = new Square(userInput.text, userInput.colorOfText, userInput.colorOfShape); 
        fs.writeFileSync("./Example/logo.svg", square.render());
    } else if (userInput.shape === "Triangle") {
        const triangle = new Triangle(userInput.text, userInput.colorOfText, userInput.colorOfShape); 
        fs.writeFileSync("./Example/logo.svg", triangle.render());
    }
    
    // displays text
    userText = userInput["text"];
    console.log("User text: [" + userText + "]");
    // displays font color 
    userFontColor = userInput["colorOfText"];
    console.log("Logo Font Color: [" + userFontColor + "]");
    // displays shape 
    userShapeType = userInput["shape"];
    console.log("Shape Entered: [" + userShapeType + "]");
    // displays shape color 
    userShapeColor = userInput["colorOfShape"];
    console.log("Shape Color: [" + userShapeColor + "]");
    console.log("Generated logo.svg!");
}

start();