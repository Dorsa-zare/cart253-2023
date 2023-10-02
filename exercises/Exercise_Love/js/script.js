/**
 * Love, Actually
 * Dorsa Zare
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let girl;
let boy;
let girlImage;
let boyImage;
let ghostImage; // Variable to hold the ghost boy's image
let soulmateImage; // Variable to hold the soulmate's image
let state = "title"; // Can be title, simulation, love, ghost, inLove
let ghosted = false; // Flag to track if the boy has been ghosted
let soulmate;


/**
 * Description of preload
*/
function preload() {
    // Load the girl's image
    girlImage = loadImage("assets/images/girl.png");
    // Load the boy's image
    boyImage = loadImage("assets/images/boy.png");
    // Load the ghost boy's image
    ghostImage = loadImage("assets/images/ghost.png");
    // Load the soulmate image
  soulmateImage = loadImage("assets/images/soulmate.png");

  }
  


/**
 * Description of setup
*/

function setup() {
   createCanvas(500, 500);
    girl = {
      x: width / 2,
      y: height / 2,
      size: 100,
    };
    setupBoy();
  }

function setupBoy() {
    boy = {
      x: 0,
      y: random(height),
      size: 100,
      vx: random(-2, 2),
      vy: random(-2, 2),
    };
}

function setupSoulmate() {
    soulmate = {
      x: random(width),
      y: random(height),
      size: 100,
    };
}



  function draw() {
    background(0);
 

    if (state === "title") {
        title();
      } else if (state === "simulation") {
        simulation();
      } else if (state === "love") {
        love();
      } else if (state === "ghost") {
        ghost();
      } else if (state === "inLove") {
        inLove();
      }
  }


  function title() {
   
    push();
    textSize(40);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text("Find your soulmate", width / 2, height / 2 - 20 );
    pop();

    push();
    textSize(20);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Press Enter to start", width / 2, height / 2 + 20 );
    pop();
  
    // Check for Enter key press to transition to the next state
    if (keyIsPressed && key === "Enter") {
      state = "simulation";
    }
}

  
  function simulation() {
    // Move the boy
    move(boy);
    checkOffscreen(boy);
  
    // Calculate the distance between the girl and boy
    let d = dist(girl.x, girl.y, boy.x, boy.y);
  
    // Check if the girl is moving towards the boy
    if (d < girl.size / 2 + boy.size / 2) {
      if (boy.x > width / 2) {
        // If the touch is in the right half, boy turns into a ghost
        ghosted = true;
        state = "ghost";
      } else if (ghosted) {
        // If the touch is in the left half and boy was previously ghosted, transition to the "love" state
        state = "love";
      }
    } else {
      // Map girl's position to mouse movement
      girl.x = mouseX;
      girl.y = mouseY;
    }
  
    display();
    if (ghosted) {
      ghostedText();
    }
}


  function love() {
    push();
    textSize(30);
    fill(255, 150, 150);
    textAlign(CENTER, CENTER);
    text("You found your soulmate!", width / 2, height / 2);
    pop();

    // Check for Enter key press to transition to the "inLove" state
    if (keyIsPressed && key === "Enter") {
      state = "inLove";
      setupSoulmate();
    }
}
function ghost() {
    // Display the ghosted text
    ghostedText();

    // Check for Enter key press to transition to the "love" state
    if (keyIsPressed && key === "Enter") {
      state = "love";
    }
}


function inLove() {
    // Move the girl towards the soulmate with arrow keys
    if (keyIsDown(LEFT_ARROW)) {
      girl.x -= 2;
    } else if (keyIsDown(RIGHT_ARROW)) {
      girl.x += 2;
    } else if (keyIsDown(UP_ARROW)) {
      girl.y -= 2;
    } else if (keyIsDown(DOWN_ARROW)) {
      girl.y += 2;
    }

    // Calculate the distance between the girl and soulmate
    let d = dist(girl.x, girl.y, soulmate.x, soulmate.y);

    // Check if the girl is close to the soulmate
    if (d < girl.size / 2 + soulmate.size / 2) {
      state = "inLove";
    }

    display();
}


function move() {
       // entity.x += entity.vx;
        // entity.y += entity.vy;
    
        // if (entity.x < 0) {
        // entity.x = width;
        // } else if (entity.x > width) {
        // entity.x = 0;
        // }
    
        // if (entity.y < 0) {
        // entity.y = height;
        // } else if (entity.y > height) {
        // entity.y = 0;
        // }


  // Move the boy
  boy.x = boy.x + boy.vx;
  boy.y = boy.y + boy.vy;




    }

  
function checkOffscreen() {
    if (
      boy.x < 0 || boy.x > width ||
      boy.y < 0 || boy.y > height
    ) {
      setupBoy();
    }
}

function display() {
    image(girlImage, girl.x - girl.size / 2, girl.y - girl.size / 2, girl.size, girl.size);
    if (ghosted) {
      image(ghostImage, boy.x - boy.size / 2, boy.y - boy.size / 2, boy.size, boy.size);
    } else if (state === "inLove") {
      image(soulmateImage, soulmate.x - soulmate.size / 2, soulmate.y - soulmate.size / 2, soulmate.size, soulmate.size);
    } else {
      image(boyImage, boy.x - boy.size / 2, boy.y - boy.size / 2, boy.size, boy.size);
    }
}

  
function ghostedText() {
    push();
    textSize(40);
    fill(255, 0, 0); // Red color for being ghosted
    textAlign(CENTER, CENTER);
    text("You just got ghosted", width / 2, height / 2);
  
    textSize(20);
    fill(255);
    text("Press Enter to find your soulmate again", width / 2, height / 2 + 50);
    pop();
  
    // Check for Enter key press to restart the game
    if (keyIsPressed && key === "Enter") {
      ghosted = false; // Reset the ghosted flag
      setupBoy(); // Reset the boy's position
      state = "simulation"; // Transition back to the "simulation" state
    }
}