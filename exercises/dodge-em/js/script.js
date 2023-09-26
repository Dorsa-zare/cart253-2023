/**
 * Dodge em
 * Dorsa Zare
 * 
 * This is a simple game where a squirrel is being followed by a bee.
 * User should try not to get bitten by the bee by moving the mouse. 
 */

"use strict";

// The bee which will be following the squirrel
let bee = {
    x: 0,
    y: 250,
    size: 50, 
    speed: 5,
};

// The squirrel which is the user's character
let squirrel = {
    x: 250,
    y: 250,
    size: 80
};

let backgroundImage;
let squirrelImage;
let beeImage;

/**
 * The images for the squirrel, the bee and the background are in preload.
*/
function preload() {

    // Load the background image 
backgroundImage = loadImage("assets/images/bg.jpg");

   // Load the bee image ( from https://www.pngegg.com/en/png-bwikt/download)
   beeImage = loadImage("assets/images/bee.png");

// Load the squirrel image 
squirrelImage = loadImage("assets/images/squirrel.png");

}

/**
 * The canvas is created in setup 
*/
function setup() {

    createCanvas(windowWidth, windowHeight);
    bee.x = random(0, width);
    bee.y = random(0, height);
    noCursor();
    
}

/**
 * The squirrel and the bee and their actions are included in the draw.
*/
function draw() {

  // Use the loaded background image
  image(backgroundImage, 0, 0, width, height);


  // Update squirrel position to follow the mouse
  squirrel.x = mouseX;
  squirrel.y = mouseY;

  // Calculate direction towards the bee
  let dx = bee.x - squirrel.x;
  let dy = bee.y - squirrel.y;
  let distance = sqrt(dx * dx + dy * dy);

  // Move bee towards the squirrel based on speed
  if (distance > 0) {
      bee.x -= (dx / distance) * bee.speed;
      bee.y -= (dy / distance) * bee.speed;
  }

  // Check for not touching the bee
  let d = dist(squirrel.x, squirrel.y, bee.x, bee.y);
  if (d < bee.size / 2 + squirrel.size / 2) {
      noLoop();
  }

  // Change the size of bee based on distance from the squirrel
  if (d < bee.size + squirrel.size) {
      // If close, grow bee 
      bee.size += 1;
      bee.size = min(bee.size, 200); // Maximum size
  } else {
      // If further away, shrink bee
      bee.size -= 1;
      bee.size = max(bee.size, 50); // Minimum size
  }

   // Display the bee image
   image(beeImage, bee.x, bee.y, bee.size, bee.size)


  // Display the squirrel image as the squirrel
  image(squirrelImage, squirrel.x, squirrel.y, squirrel.size, squirrel.size);

}