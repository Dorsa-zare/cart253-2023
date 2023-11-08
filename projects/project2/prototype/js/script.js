/**
 * Project 2 prototype
 * Dorsa Zare
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let petImages = []; //The 4 images of the pets
let chosenPet; //The pet that the user has chosen which will be showin in the next levels
let buttonImages = []; // Array to store button images
let buttonText = []; // Array to store button text
let state = "title"; //Starting the game in title state
let titleBackgroundImage; //The background image for the title state

/**
 * Description of preload
*/
function preload() {

    //The images of the pets
    for (let i = 1; i <= 4; i++) {
        petImages[i] = loadImage(`assets/images/pet${i}.png`);
    }

    // Load button images and text into arrays
    for (let i = 0; i < 4; i++) {
        buttonImages[i] = loadImage(`assets/images/button.png`);
    }
    buttonText = ["Anxious", "Stressed", "Angry", "Happy"];

    //The image for the background of title state  
    titleBackgroundImage = loadImage(`assets/images/titleBackground.png`)
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
}


/**
 * Description of draw()
*/
function draw() {
    if (state === "title") {
        title();
    } else if (state === "instruction") {
        instruction();
    } else if (state === "customizePet") {
        customizePet();
    } else if (state === "hello") {
        hello();
    } else if (state === "emotions") {
        emotions();
    } else if (state === "anxious") {
        anxious();
    // } else if (state === "gameForAnxiety") {
    //     plantingGame();

    }
}

function title() {
    // The title page
    background(titleBackgroundImage);
    displayTitleText();
}

function displayTitleText() {
    // Display the title and "Press here to start" message
    textSize(30);
    text("Press mouse to start", width / 2 - 150, height / 2 + 50);
}


function instruction() {
    background(180, 200, 150);
    textSize(28);
    textAlign(CENTER, CENTER);
    fill(0);
    text(`Have fun interacting with your virtual companion and
        watch how it responds to your emotions.
        Don't forget to customize your pet's look to make it your own.
        Enjoy exploring the world of emotional well-being in this interactive experience!`, width / 2, height / 2 - 50);
    textSize(20);
    text("Press here to customize your pet", width / 2, height / 2 + 90);
}

function customizePet() {
    background(180, 200, 150);
    textSize(28);
    textAlign(CENTER, CENTER);
    fill(0);
    text(` Choose your emotional support pet's look
        to make it your own! `, width / 2, height / 2 - 200);

    displayPetImages();
    displayPetLabels();
}

function displayPetImages() {
    image(petImages[1], 140, height / 2 - 130, 300, 300);
    image(petImages[2], 400, height / 2 - 140, 320, 320);
    image(petImages[3], 620, height / 2 - 130, 300, 300);
    image(petImages[4], 850, height / 2 - 130, 300, 300);
}

function displayPetLabels() {
    // Add a label for each pet image
    textSize(18);
    textAlign(CENTER, CENTER);
    fill(0);
    text("Pet 1", 340, height / 2 + 170);
    text("Pet 2", 550, height / 2 + 170);
    text("Pet 3", 770, height / 2 + 170);
    text("Pet 4", 1000, height / 2 + 170);
}

function checkChosenPet() {
    if (mouseX > 140 && mouseX < 440 && mouseY > height / 2 - 130 && mouseY < height / 2 + 170) {
        chosenPet = petImages[1];
        state = "hello";
    } else if (mouseX > 400 && mouseX < 720 && mouseY > height / 2 - 140 && mouseY < height / 2 + 180) {
        chosenPet = petImages[2];
        state = "hello";
    } else if (mouseX > 620 && mouseX < 920 && mouseY > height / 2 - 130 && mouseY < height / 2 + 170) {
        chosenPet = petImages[3];
        state = "hello";
    } else if (mouseX > 850 && mouseX < 1150 && mouseY > height / 2 - 130 && mouseY < height / 2 + 170) {
        chosenPet = petImages[4];
        state = "hello";
    }
}

function hello() {
    // Display the chosen pet image
    background(180, 200, 150);
    
    image(chosenPet, width / 2 - 150, height / 2 - 150, 360, 360);

    // Display the text above the pet's head
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(0);
    text("Hello, I will be your emotional support pet", width / 2, height / 2 - 200);
    text("I will do my best to accompany you and help you in your journey.", width / 2, height / 2 - 160);
    textSize(20);
    text("Press mouse to start", width / 2 + 20, height / 2 + 200);
}


function emotions() {
    background(180, 200, 150);

    image(chosenPet, width / 2 - 400, height / 2 - 150, 400, 400);
    textSize(28);
    textAlign(CENTER, CENTER);
    fill(0);
    text(`Which one of these best reflects how you're feeling right now? `, width / 2, height / 2 - 200);


    // Display button images and text using arrays
    for (let i = 0; i < 4; i++) {
        image(buttonImages[i], width / 2 + 100, height / 2 - 220 + i * 80, 250, 250);
        text(buttonText[i], width / 2 + 220, height / 2 - 85 + i * 80);

    }
}

function mousePressed() {
    if (state === "title") {
        state = "instruction";
    } else if (state === "instruction") {
        if (mouseY > height / 2 + 90) {
            state = "customizePet";
        }
    } else if (state === "customizePet") {
        checkChosenPet()
    } else if (state === "hello") {
        state = "emotions";
    } else if (state === "emotions") {
        // Check if the user clicked on the "Anxious" option
        if (
            mouseX > width / 2 + 100 &&
            mouseX < width / 2 + 350 &&
            mouseY > height / 2 - 220 &&
            mouseY < height / 2 - 220 + 250
        ) {
            state = "anxious"; // Transition to the "anxious" state
        }
    }
}

function anxious() {
    // Display the chosen pet image
    background(180, 200, 150);
    image(chosenPet, width / 2 - 150, height / 2 - 150, 360, 360);

    // Display the text above the pet's head
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(0);
    text("It's normal to feel anxious sometimes but I'm here to help you.", width / 2, height / 2 - 200);
    text("Let's play a little game that could make you less anxious", width / 2, height / 2 - 160);
    textSize(20);
    text("Press mouse to start game", width / 2 + 20, height / 2 + 200);
}
