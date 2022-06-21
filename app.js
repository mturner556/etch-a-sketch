let gridButton = document.getElementById("gridButton");
// setting color mode
let color = "black";

// setting the initial size of the grid
function makeGrid (size) {
    // setting the container div
    let container = document.getElementById("container");
    //removing the divs inside the container
    // look into the forEach method more...
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    // setting the style of grid pattern for the container
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    // creating the squares to fill the area of the container
    let gridArea = size * size;
    for (let i = 0; i < gridArea; i++) {
        let square = document.createElement("div");
        // adding a mouseover event to the squares
        square.addEventListener("mouseover", colorSquare);
        container.append(square);
    }
}

makeGrid(16);

// setting the grid size based on user input
function getGridSize (value) {
    if (value >= 16 && value <= 100) {
        makeGrid(value);
    } else {
        alert("error");
    }
}

// adding an eventListener to the button
gridButton.addEventListener("click", () => {
    let userInput = prompt("Choose a number between 16 and 100.");
    
    getGridSize(userInput);
});

// functions that define what color to use
function colorSquare () {
    if (color === "random") {
        this.style.backgroundColor = randomColor();
    } else {
        this.style.backgroundColor = color;
    }
}

//random color generator
function randomColor () {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let rgb = "rgb(" + x + "," + y + "," + z + ")";

    return rgb;
}

function colorMode (choice) {
    color = choice;
}

// clear all divs to white when clear button is pressed
function clearDiv () {
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}