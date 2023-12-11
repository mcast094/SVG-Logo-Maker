const inquirer = require("inquirer");

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

    answerInput = userInput["text"];
    // trying to create statement to check for text input if longer than 3 characters. Currently defaults to else condition
    // if(userInput.text.length > 0 && userInput.length <4) {
    //     answerInput = userInput.text; 
    // } else {
    //     console.log("Invalid input! Please enter 1-3 characters!"); 
    //     return; 
    // }
    
    // displays text
    console.log("User text: [" + answerInput + "]");
    // displays font color 
    userFontColor = userInput["colorOfText"];
    console.log("Logo Font Color: [" + userFontColor + "]");
    // displays shape 
    userShapeType = userInput["shape"];
    console.log("Shape Entered: [" + userShapeType + "]");
    // displays shape color 
    userShapeColor = userInput["colorOfShape"];
    console.log("Shape Color: [" + userShapeColor + "]");


    
}

start();