/**
 * Project 2 
 * Dorsa Zare
 * 
 * This is a program where you can play mini games based on how you are feeling. 
 */

"use strict";

let state = "title"; //Starting the game in title state
let title; // The class that displays the title
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
let painting; //The state which has the painting mini game


/**
 * Description of preload
*/
function preload() {
    // Load button images and text into arrays
    for (let i = 0; i < 4; i++) {
        buttonImages[i] = loadImage(`assets/images/button.png`);
    }
    buttonText = ["Anxious", "Discouraged", "Angry"];
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

    userStartAudio();
    createCanvas(windowWidth, windowHeight);
    title = new Title(titleBackgroundImage);
    petCustomization = new PetCustomization();
    petCustomization.preload();
    petCustomization.setup();
    hello = new Hello(petCustomization);
    emotions = new Emotions(petCustomization);
    gameDuration = new GameDuration(); // Initialize gameDuration first
    anxietyGame = new AnxietyGame(tilesImage, bubbleImages, bubblePopSound, gameDuration.getDuration());
    positiveAffirmation = new PositiveAffirmation();
    painting = new Painting(petCustomization);
}

/**
 * Description of draw()
*/
function draw() {
    if (state === "title") {
        title.display();
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
    } else if (state === "painting") {
        painting.display();
    }
}


function mousePressed() {
    if (state === "title") {
        state = "customizePet";
    } else if (state === "customizePet") {
        petCustomization.checkChosenPet();
    } else if (state === "hello") {
        hello.handleMousePress();
    } else if (state === "emotions") {
        emotions.handleMousePress();
    } else if (state === "promptDuration") {
        gameDuration.handleSelection();
        state = "anxietyGame";
    } else if (state === "positiveAffirmation") {
        positiveAffirmation.mousePressed();
    } else if (state === "painting") {
        painting.mousePressed();
    }
}
function mouseReleased() {
    if (state === "positiveAffirmation") {
        positiveAffirmation.mouseReleased();
    }
}
