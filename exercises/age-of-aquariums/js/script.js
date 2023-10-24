/**
 * Age of Aquarium Exercise 
 * Dorsa Zare
 * 
 * This is a bug-spraying simulation game.
 * You are armed with a powerful bug spray and your task is to click on each bug using your mouse to eliminate them. 
 * These bugs come in a variety of colors and sizes. You need to spray all the bugs to win. 
 * But if more than 15 bugs are alive together, they'll take over, and you'll lose.  
 *  When you spray one bug, it startles the others, causing them to transform into red bugs. 
 * 
 */

"use strict";

let bugs = [];
let maxBugs = 15;
let sprayImage;
let bugImages = [];
let lastBugTime = 0;
let bugInterval = 60; // Create a new bug every second
let gameState = "title"; // Initialize the game state
let killedBugs = 0; // Initialize the number of killed bugs
let bugCreationAllowed = true; // Initialize bug creation as allowed
let bugSprayed = false; // Flag to track if a bug has been sprayed


/**
 * Loading images of THE spray and the bug
*/
function preload() {
    sprayImage = loadImage('assets/images/spray.png');
    bugImages[0] = loadImage('assets/images/bug1.png');
    bugImages[1] = loadImage('assets/images/bug2.png');
    bugImages[2] = loadImage('assets/images/bug3.png');
    bugImages[3] = loadImage('assets/images/bug4.png');
    bugImages[4] = loadImage('assets/images/bug5.png');
}

let spray = {
    x: 0,
    y: 0,
    size: 100,
};

/**
 * Creating canvas
*/
function setup() {
    createCanvas(600, 600);
}


function createBug(x, y, size) {
    let bugSize = random(20, 80); // Random size between 20 and 80
    let bug = {
        x: x,
        y: y,
        size: bugSize,
        vx: 0,
        vy: 0,
        speed: 2,
        image:random(bugImages), //Assign a random bug image
        sprayed: false, // Flag to track if the bug has been sprayed
    };
    return bug;
}

/**
 * Displaying all the states
*/
function draw() {
    background(0);

    if (gameState === "title") {
        title();
    } else if (gameState === "playing") {
        playing();
    } else if (gameState === "win") {
        win();
    } else if (gameState === "gameover") {
        gameover();
    }
}

function title() {
    background(0); 
    displayTitletext(); //Display the title page texts
    if (mouseIsPressed) { // Check if mouse is pressed move to playing state
        gameState = "playing";
    }
}

function displayTitletext() { // The title page text
    textSize(25); 
    fill(255, 0, 0);
    text("Click on each bug with your mouse to spray them", width / 2 - 270, height / 2 - 50);
    text("Press mouse to start", width / 2 - 120, height / 2 + 50);
}


function playing() {
    background(0);

    // Update the spray's position to follow the mouse
    spray.x = mouseX;
    spray.y = mouseY;
    
    displaySpray(); // Display the spray

    for (let i = 0; i < bugs.length; i++) {
        moveBug(bugs[i]);
        displayBug(bugs[i]);
    }    

    checkForEnding(); //Check for ending of the game
}


function checkForEnding() { // Check for game ending conditions
    if (killedBugs === maxBugs) {
        gameState = "win"; // All bugs are killed
        bugCreationAllowed = false; // Stop bug creation
    } else if (bugs.length === maxBugs) {
        gameState = "gameover"; // Maximum number of bugs on the canvas
    }

    if (bugCreationAllowed && frameCount - lastBugTime >= bugInterval && bugs.length < maxBugs) {
        let newBug = createBug(random(0, width), random(0, height));
        bugs.push(newBug);
        lastBugTime = frameCount;
    }
}

function win() { //State for when the user has won
    background(0);
    textSize(32);
    fill(255, 0, 0);
    text("Congratulations! You won!", width / 2 - 180, height / 2);
}

function gameover() { //State for when the user has lost
    background(0);
    textSize(40);
    fill(255, 0, 0);
    text("Game over!", width / 2 - 120, height / 2);
}

function moveBug(bug) {
    adjustBugVelocity(bug);
    updateBugPosition(bug);
    constrainBug(bug);
 }


function adjustBugVelocity(bug) {
    // Calculate the distance between the bug and the spray
    let distanceToSpray = dist(bug.x, bug.y, spray.x, spray.y);
    // Check if the distance is smaller than the spray size (adjust this value as needed)
    if (distanceToSpray < spray.size) {
    // Calculate the direction from the bug to the spray
    let direction = calculateDirectionFromBugToSpray(bug, spray);
    // Adjust the bug's velocity based on the direction
    bug.vx += direction.dx * bug.speed;
    bug.vy += direction.dy * bug.speed;

    limitBugSpeed(bug);
 }
}

function updateBugPosition(bug) {
    // Move the bug
    bug.x = bug.x + bug.vx;
    bug.y = bug.y + bug.vy;
}

function constrainBug(bug) { 
    // Constrain the bug  
    bug.x = constrain(bug.x, 0, width);
    bug.y = constrain(bug.y, 0, height);
}

function limitBugSpeed(bug){
     // Limit the bug's speed to avoid excessive acceleration
     let bugSpeed = dist(0, 0, bug.vx, bug.vy);
     if (bugSpeed > bug.speed) {
   let ratio = bug.speed / bugSpeed;
    bug.vx *= ratio;
    bug.vy *= ratio;
     }
}


 function displayBug(bug) { //display the bug image
    push();
    image(bug.image, bug.x, bug.y, bug.size, bug.size); 
    pop();
}


function displaySpray() { //display the spray image
    image(sprayImage, spray.x, spray.y, spray.size, spray.size);
}

function calculateDirectionFromBugToSpray(bug, spray) {
    // Calculate the vector from the bug to the spray
    let dx = spray.x - bug.x;
    let dy = spray.y - bug.y;
    // Calculate the distance between the bug and the spray
    let distance = dist(bug.x, bug.y, spray.x, spray.y);
    // Normalize the direction to have a magnitude of 1
    if (distance > 0) {
        dx /= distance;
        dy /= distance;
    }
    // Invert the direction 
    dx *= -1;
    dy *= -1;

    return { dx, dy };
}

function mousePressed() {
  checkIfMouseTouchesBug();  // Check if the mouse click touches any bug
  changeRemainingBugsImage();
}

function changeRemainingBugsImage() {
  if (bugSprayed) { // Change the images of the remaining bugs to bug1(red)
  for (let i = 0; i < bugs.length; i++) {
     if (!bugs[i].sprayed) {
         bugs[i].image = bugImages[0];
         }
     }
    bugSprayed = false; // Reset the bug sprayed flag
  }
}

function checkIfMouseTouchesBug() {
    for (let i = bugs.length - 1; i >= 0; i--) {
        let bug = bugs[i];
        let distanceToBug = dist(spray.x, spray.y, bug.x, bug.y);
        
        if (distanceToBug < spray.size / 2) {
            removeBug(i);  // Remove the bug from the array
        }
    }
}

function removeBug(index) {
    bugs.splice(index, 1);
    killedBugs++;
    bugSprayed = true;

    if (killedBugs === maxBugs) {
        gameState = "win";
        bugCreationAllowed = false;
    }
}