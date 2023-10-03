/**
 * Love, Actually
 * Dorsa Zare
 * 
 * This is a game that allows the user to search for their soulmate!
 */

"use strict";

let girl;
let boy;
let girlImage;
let boyImage;
let state = "title"; // Can be title, instruction, simulation, love, selfLove,  ghost
let ghosted = false; // Flag to track if the boy has been ghosted


/**
 * To load the images
*/
function preload() {
     // Load the girl's image
     girlImage = loadImage("assets/images/girl.png");
     // Load the boy's image
     boyImage = loadImage("assets/images/boy.png");
 }
  

/**
 * Description of setup
*/

function setup() {
  createCanvas(500, 500);
  setupGirl();
  setupBoy();
}

function setupGirl() {
  girl = {
    x: width / 2,
    y: height / 2,
    size: 100,
  };
}

function setupBoy() {
  boy = {
    x: 0,
    y: random(height),
    size: 100,
    vx: random(1, 2), // Random horizontal velocity
    vy: random(-2, 2), // Random vertical velocity
  };
}


  function draw() {
    background(133, 194, 214);

    if (state === "title") {
        title();
      } else if (state === "instruction") {
        instruction();
      } else if (state === "simulation") {
        simulation();
      } else if (state === "ghost") {
        ghost();
      } else if (state === "love") {
        love();
      } else if (state === "selfLove") {
        selfLove();
      }
}

  function title() {
    push();
    textSize(40);
    fill(0);
    textAlign(CENTER, CENTER);
    text("Find your soulmate", width / 2, height / 2 - 30);
    pop();
  
    push();
    textSize(25);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Press Mouse to start", width / 2, height / 2 + 40);
    pop();
  
    checkMousePressed (); //Check for mouse press to transition to the "instruction" state
 
  }

  function checkMousePressed () { //Check for mouse press to transition to the "instruction" state
    if (mouseIsPressed) {
     state = "instruction";
   }
  }

function instruction() {
  push();
  textSize(30);
  fill(0);
  textAlign(CENTER, CENTER);
  text(" Instructions ", width / 2, height - 400);
  pop();

  push();
  textSize(20);
  fill(255);
  textAlign(CENTER,CENTER);
  text(`Use the arrow keys on your keyboard \n to navigate towards your potential soulmate. `, width / 2, height / 2 - 20);
  pop();

  push();
  textSize(30);
  fill(0);
  textAlign(CENTER, CENTER);
  text("Press Enter to start", width / 2, height - 100);
  pop();

  // Check for Enter key press to transition to the "simulation" state
  if (keyIsPressed && key === "Enter") {
      state = "simulation";
  }
 }

  function simulation() {
    boyMovement(); //Move the boy
    CheckOffScreen(); //Check if the boy went out of the screen then change state to ghost
    calculateDistance (); // Calculate the distance between the girl and boy, if they overlay change state to love
    // Check if the user pressed the mouse
    if (mouseIsPressed) {
      state = "selfLove";
    }
    girlMovement (); //Control the girl with arrow keys
    display(); //Display girl and boy
 }


function boyMovement() {
  // Move the boy
  boy.x += boy.vx;
  boy.y += boy.vy;
 }

function CheckOffScreen() {
  // Check if the boy went out of the screen
  if (boy.x > width) {
  state = "ghost";
  ghosted = true;
  }
 }

 function calculateDistance (){
  // Calculate the distance between the girl and boy
  let d = dist(girl.x, girl.y, boy.x, boy.y);
  // Check if the girl and boy overlay
  if (d < girl.size / 2 + boy.size / 2) {
    state = "love";
  }
 }

function girlMovement() {
  // Control the girl with arrow keys
  if (keyIsDown(LEFT_ARROW)) {
    girl.x -= 2;
  } else if (keyIsDown(RIGHT_ARROW)) {
    girl.x += 2;
  } else if (keyIsDown(UP_ARROW)) {
    girl.y -= 2;
  } else if (keyIsDown(DOWN_ARROW)) {
    girl.y += 2;
  }
 }

 function selfLove() {
  push();
  textSize(30);
  fill(0);
  textAlign(CENTER, CENTER);
  text("You chose self-love.", width / 2, height / 2 - 40);
  textSize(25);
  text("Congratulations!", width / 2, height / 2 + 20);
  pop();
}

  function love() {
    push();
    textSize(20);
    fill(0);
    textAlign(CENTER, CENTER);
    text("You've Found Your Soulmate!", width / 2, height / 2);
    pop();
 }

function ghost() {
  ghostedText(); // Display the ghosted text
  checkKeyPressed ();  // Check for Enter key press to restart the game
 }

 function checkKeyPressed() {
  // Check for Enter key press to restart the game
  if (keyIsPressed && key === "Enter") {
    setupBoy(); // Reset the boy's position
    ghosted = false; // Reset the ghosted flag
    state = "simulation"; // Transition back to the "simulation" state
  }
  }

 function display() { 
  //Display girl and boy
  image(girlImage, girl.x - girl.size / 2, girl.y - girl.size / 2, girl.size, girl.size);
  image(boyImage, boy.x - boy.size / 2, boy.y - boy.size / 2, boy.size, boy.size);
 }

function ghostedText() {
  textSize(30);
  fill(0); 
  textAlign(CENTER, CENTER);
  text("You've Been Ghosted! ", width / 2, height / 2);
  fill(255);
  text("Press Enter to Restart", width / 2, height / 2 + 50);
  
 }