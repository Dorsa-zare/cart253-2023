/**
 * Dodge em
 * Dorsa Zare
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";


let bee = {
    x: 0,
    y: 250,
    size: 50, 
    speed: 5,
};


let user = {
    x: 250,
    y: 250,
    size: 100
};


let backgroundImage;
let squirrelImage;
let beeImage;

/**
 * None
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
 * Description of setup
*/
function setup() {

    createCanvas(windowWidth, windowHeight);
    bee.x = random(0, width);
    bee.y = random(0, height);
    noCursor();
    
}

/**
 * Description of draw()
*/
function draw() {

  // Use the loaded background image
  image(backgroundImage, 0, 0, width, height);


  // Update user position to follow the mouse
  user.x = mouseX;
  user.y = mouseY;

  // Calculate direction towards the bee
  let dx = bee.x - user.x;
  let dy = bee.y - user.y;
  let distance = sqrt(dx * dx + dy * dy);

  // Move bee towards the user based on speed
  if (distance > 0) {
      bee.x -= (dx / distance) * bee.speed;
      bee.y -= (dy / distance) * bee.speed;
  }

  // Check for not touching the bee
  let d = dist(user.x, user.y, bee.x, bee.y);
  if (d < bee.size / 2 + user.size / 2) {
      noLoop();
  }

  // Change the size of bee based on distance from the user
  if (d < bee.size + user.size) {
      // If close, grow bee 
      bee.size += 1;
      bee.size = min(bee.size, 200); // Set a maximum size
  } else {
      // If further away, shrink bee
      bee.size -= 1;
      bee.size = max(bee.size, 50); // Set a minimum size
  }

   // Display the bee image
   image(beeImage, bee.x - bee.size / 2, bee.y - bee.size / 2, bee.size, bee.size);


  // Display the squirrel image as the user
  image(squirrelImage, user.x - user.size / 2, user.y - user.size / 2, user.size, user.size);
}