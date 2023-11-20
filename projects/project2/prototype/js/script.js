/**
 * Project 2 
 * Dorsa Zare
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let state = "title"; //Starting the game in title state
let title; // The class that displays the title
let instruction; //The class that displays instructions
let petCustomization; //The state where user can choose prefered pet image
let petImages = []; //The 4 images of the pets
let chosenPet; //The pet that the user has chosen which will be showin in the next levels
let hello; //the state that the chosen pet says hello
let emotions; //the stat that shows emotions menu
let buttonImages = []; // Array to store button images
let buttonText = []; // Array to store button text
let titleBackgroundImage; //The background image for the title state
let anxietyGame; // The class that handles the anxiety game
let bubbleImages = []; // Array to store bubble images
let bubbles = []; // Array to store bubble objects
let tilesImage; //Th eimage of tiles for background of bubble game
let gameDuration; //Duration of the bubble game for anxiety
let bubblePopSound; //Sound effect for bubble popping
let positiveAffirmation; //The state which has the positive affirmation journal mini game


/**
 * Description of preload
*/
function preload() {

    // Load button images and text into arrays
    for (let i = 0; i < 4; i++) {
        buttonImages[i] = loadImage(`assets/images/button.png`);
    }
    buttonText = ["Anxious", "Discouraged", "Angry", "Excited"];
    //The image for the background of title state  
    titleBackgroundImage = loadImage(`assets/images/titleBackground.png`)
    // Load bubble images into the array
    bubbleImages[0] = loadImage(`assets/images/bubble.png`);
    // Load tiles background image
    tilesImage = loadImage(`assets/images/tiles.png`)
    //Load bubble popping sound effect for the anxiety game
    bubblePopSound = loadSound('assets/sounds/bubblePop.mp3');

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    instruction = new Instruction(); // The class that displays instructions
    title = new Title(titleBackgroundImage); // The class that displays the title
    petCustomization = new PetCustomization(); // The class that includes pet customization 
    petCustomization.preload();
    petCustomization.setup();
    hello = new Hello(petCustomization); // The class that the chosen pet says hello
    emotions = new Emotions(petCustomization); // The class that displays emotions menu
    anxietyGame = new AnxietyGame(tilesImage, bubbleImages, bubblePopSound); // The class that handles the anxiety game
    gameDuration = new GameDuration(bubbleImages); // The duration of the game for the bubble mini-game
    positiveAffirmation = new PositiveAffirmation(); // Positive affirmation journal mini game
}


/**
 * Description of draw()
*/
function draw() {
    if (state === "title") {
        title.display();
    } else if (state === "instruction") {
        instruction.display();
    } else if (state === "customizePet") {
        petCustomization.draw();
    } else if (state === "hello") {
        hello.display();
    } else if (state === "emotions") {
        emotions.display();
    } else if (state === "anxietyGame") {
        anxietyGame.display();
    } else if (state === "promptDuration") {
        gameDuration.prompt();
    } else if (state === "positiveAffirmation") {
        positiveAffirmation.prompt();
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
        petCustomization.checkChosenPet();
    } else if (state === "hello") {
        hello.handleMousePress();
    } else if (state === "emotions") {
        emotions.handleMousePress();
    } else if (state === "promptDuration") {
        gameDuration.handleSelection();
        state = "anxietyGame";
    };
}

function mouseReleased() {
    positiveAffirmation.mouseReleased();
}