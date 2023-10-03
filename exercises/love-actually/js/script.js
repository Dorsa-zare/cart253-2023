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
let state = "title"; // Can be title, simulation, love, ghost
let ghosted = false; // Flag to track if the boy has been ghosted


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
      } else if (state === "love") {
        love();
      } else if (state === "ghost") {
        ghost();
      }
}


  function title() {
    push();
    textSize(40);
    fill(207, 95, 139);
    textAlign(CENTER, CENTER);
    text("Find your soulmate", width / 2, height / 2 - 30);
    pop();
  
    push();
    textSize(25);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Press Mouse to start", width / 2, height / 2 + 40);
    pop();
  
    // Check for mouse press to transition to the "instruction" state
    if (mouseIsPressed) {
      state = "instruction";
    }
  }



function instruction() {
  push();
  textSize(30);
  fill(207, 95, 139);
  textAlign(CENTER, CENTER);
  text(" Instructions ", width / 2, height - 400);
  pop();

  push();
  textSize(17);
  fill(255);
  textAlign(CENTER,CENTER);
  text("Move with the arrows on your keyboard to go to your soulmate.", width / 2, height / 2 - 20);
  text("Remember if someone ghosts you, they're not your soulmate! ", width / 2, height / 2 + 20);
  pop();

  push();
  textSize(30);
  fill(207, 95, 139);
  textAlign(CENTER, CENTER);
  text("Press Enter to start", width / 2, height - 100);
  pop();

  // Check for Enter key press to transition to the "simulation" state
  if (keyIsPressed && key === "Enter") {
      state = "simulation";
  }
}

  function simulation() {
    // Move the boy
    boy.x += boy.vx;
    boy.y += boy.vy;
  
    // Check if the boy went out of the screen
    if (boy.x > width) {
      state = "ghost";
      ghosted = true;
      boy.x = width; // Ensure the boy is still visible on the screen
    }
  
    // Calculate the distance between the girl and boy
    let d = dist(girl.x, girl.y, boy.x, boy.y);
  
    // Check if the girl and boy touch
    if (d < girl.size / 2 + boy.size / 2) {
      state = "love";
    }

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
  
    display();
}


  function love() {
    push();
    textSize(30);
    fill(207, 95, 139);
    textAlign(CENTER, CENTER);
    text("You found your soulmate!", width / 2, height / 2);
    pop();

    // Check for Enter key press to restart the game
    if (keyIsPressed && key === "Enter") {
      setupBoy(); // Reset the boy's position
      ghosted = false; // Reset the ghosted flag
      state = "simulation"; // Transition back to the "simulation" state
    }
}


function ghost() {
     // Display the ghosted text
     ghostedText();

     // Check for Enter key press to restart the game
     if (keyIsPressed && key === "Enter") {
       setupBoy(); // Reset the boy's position
       ghosted = false; // Reset the ghosted flag
       state = "simulation"; // Transition back to the "simulation" state
     }
 }

 function display() {
  image(girlImage, girl.x - girl.size / 2, girl.y - girl.size / 2, girl.size, girl.size);
  if (ghosted) {
    image(ghostImage, boy.x - boy.size / 2, boy.y - boy.size / 2, boy.size, boy.size);
  } else {
    image(boyImage, boy.x - boy.size / 2, boy.y - boy.size / 2, boy.size, boy.size);
  }
}

function ghostedText() {
  push();
  textSize(40);
  fill(207, 95, 139); 
  textAlign(CENTER, CENTER);
  text("You just got ghosted! ", width / 2, height / 2);

  textSize(20);
  fill(255);
  text("Press Enter to restart", width / 2, height / 2 + 50);
  pop();
}