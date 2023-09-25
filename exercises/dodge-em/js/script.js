/**
 * Dodge em
 * Dorsa Zare
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";


let fallLeaf = {
    x: 0,
    y: 250,
    size: 50, 
    speed: 5,
    fill: {
        r: 255,
        g: 102,
        b: 0 
    }
};

let user = {
    x: 250,
    y: 250,
    size: 100
};

let numStatic = 5000;
let backgroundImage;
let squirrelImage;

/**
 * None
*/
function preload() {

    // Load the background image 
backgroundImage = loadImage("assets/images/bg.jpg");
// Load the squirrel image 
squirrelImage = loadImage("assets/images/squirrel.png");

}

/**
 * Description of setup
*/
function setup() {

    createCanvas(windowWidth, windowHeight);
    fallLeaf.x = random(0, width);
    fallLeaf.y = random(0, height);
    noCursor();
    
}

/**
 * Description of draw()
*/
function draw() {

  // Use the loaded background image
  image(backgroundImage, 0, 0, width, height);

  // Display static
  for (let i = 0; i < numStatic; i++) {
      let x = random(0, width);
      let y = random(0, height);
      stroke(255);
      point(x, y);
  }

  // Update user position to follow the mouse
  user.x = mouseX;
  user.y = mouseY;

  // Calculate direction towards the fall leaf
  let dx = fallLeaf.x - user.x;
  let dy = fallLeaf.y - user.y;
  let distance = sqrt(dx * dx + dy * dy);

  // Move fall leaf towards the user based on speed
  if (distance > 0) {
      fallLeaf.x -= (dx / distance) * fallLeaf.speed;
      fallLeaf.y -= (dy / distance) * fallLeaf.speed;
  }

  // Check for not touching the fall leaf
  let d = dist(user.x, user.y, fallLeaf.x, fallLeaf.y);
  if (d < fallLeaf.size / 2 + user.size / 2) {
      noLoop();
  }

  // Change the size of fall leaf based on distance from the user
  if (d < fallLeaf.size + user.size) {
      // If close, grow fall leaf
      fallLeaf.size += 1;
      fallLeaf.size = min(fallLeaf.size, 200); // Set a maximum size
  } else {
      // If further away, shrink fall leaf
      fallLeaf.size -= 1;
      fallLeaf.size = max(fallLeaf.size, 50); // Set a minimum size
  }

  // Display fall leaf at its position
  fill(fallLeaf.fill.r, fallLeaf.fill.g, fallLeaf.fill.b);
  ellipse(fallLeaf.x, fallLeaf.y, fallLeaf.size);

  // Display the squirrel image as the user
  image(squirrelImage, user.x - user.size / 2, user.y - user.size / 2, user.size, user.size);
}