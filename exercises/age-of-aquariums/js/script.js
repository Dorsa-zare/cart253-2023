/**
 * Age of Aquariums 
 * Dorsa Zare
 * 
 * 
 */

"use strict";

let bugs = [];
let maxBugs = 10;
let sprayImage;
let bugImage;
let lastBugTime = 0;
let bugInterval = 60; // Create a new bug every 3 seconds (60 frames per second * 3 seconds)

let gameState = "playing"; // Initialize the game state
let killedBugs = 0; // Initialize the number of killed bugs
let bugCreationAllowed = true; // Initialize bug creation as allowed


/**
 * Description of preload
*/
function preload() {
    sprayImage = loadImage('assets/images/spray.png');
    bugImage = loadImage('assets/images/bug1.png');
}

let spray = {
    x: 0,
    y: 0,
    size: 100,
};

/**
 * Description of setup
*/
function setup() {
    createCanvas(600, 600);

    // for (let i = 0; i < schoolSize; i++) {
    //     school[i] = createBug(random(0, width), random(0, height));
    //   }

}

//Create bug (x,y)
function createBug(x, y) {
    let bug = {
        x: x,
        y: y,
        size: 50,
        vx: 0,
        vy: 0,
        speed: 2
    };
    return bug;
}

/**
 * Description of draw()
*/
function draw() {
    background(0);

    // Update the spray's position to follow the mouse
    spray.x = mouseX;
    spray.y = mouseY;
    // Display the spray
    image(sprayImage, spray.x, spray.y, spray.size, spray.size);

    for (let i = 0; i < bugs.length; i++) {
        moveBug(bugs[i]);
        displayBug(bugs[i]);
    }    

    // Check for game ending conditions
    if (killedBugs === maxBugs) {
        gameState = "win"; // All bugs are killed
        bugCreationAllowed = false; // Stop bug creation
    } else if (bugs.length === maxBugs) {
        gameState = "gameover"; // Maximum number of bugs on the canvas
    }

    // Display game endings
    if (gameState === "win") {
        // Winning ending
        textSize(32);
        fill(255, 0, 0);
        text("Congratulations! You won!", width / 2 - 180, height / 2);
    } else if (gameState === "gameover") {
        // Game Over ending
        textSize(50);
        fill(255, 0, 0);
        text("Game over!", width / 2 - 100, height / 2);
    }

    // Bug creation (only if bugCreationAllowed is true)
    if (bugCreationAllowed && frameCount - lastBugTime >= bugInterval && bugs.length < maxBugs) {
        let newBug = createBug(random(0, width), random(0, height));
        bugs.push(newBug);
        lastBugTime = frameCount;
    }
 }

function moveBug(bug) {

      // Calculate the distance between the bug and the spray
      let distanceToSpray = dist(bug.x, bug.y, spray.x, spray.y);

     // Check if the distance is smaller than the spray size (adjust this value as needed)
     if (distanceToSpray < spray.size) {
        // Calculate the direction from the bug to the spray
        let direction = calculateDirectionFromBugToSpray(bug, spray);

        // Adjust the bug's velocity based on the direction
        bug.vx += direction.dx * bug.speed;
        bug.vy += direction.dy * bug.speed;

        // Limit the bug's speed to avoid excessive acceleration
        let bugSpeed = dist(0, 0, bug.vx, bug.vy);
         if (bugSpeed > bug.speed) {
            let ratio = bug.speed / bugSpeed;
            bug.vx *= ratio;
            bug.vy *= ratio;
          }
 }

  // Move the bug
  bug.x = bug.x + bug.vx;
  bug.y = bug.y + bug.vy;

  // Constrain the bug
  bug.x = constrain(bug.x, 0, width);
  bug.y = constrain(bug.y, 0, height);

}

// Display Bug (bug)
 function displayBug(bug) {
     push();
    // fill(200, 100, 100);
    //  noStroke();
    //  ellipse(bug.x, bug.y, bug.size);
    image(bugImage, bug.x, bug.y, bug.size, bug.size);
     pop();
 }


function displaySpray() {
    image(sprayImage, spray.x, spray.y, spray.size, spray.size);
}

function calculateDirectionFromBugToSpray(bug, spray) {
 // Calculate the vector from the bug to the spray
 let dx = spray.x - bug.x;
 let dy = spray.y - bug.y;

 // Calculate the distance between the bug and the spray
 let distance = dist(bug.x, bug.y, spray.x, spray.y);

 // Normalize the direction vector to have a magnitude of 1
 if (distance > 0) {
     dx /= distance;
     dy /= distance;
 }

 // Invert the direction vector
 dx *= -1;
 dy *= -1;

 return { dx, dy };
}


function mousePressed() {
    // Check if the mouse click touches any bug
    for (let i = bugs.length - 1; i >= 0; i--) {
        let bug = bugs[i];
        let distanceToBug = dist(spray.x, spray.y, bug.x, bug.y);
        
        if (distanceToBug < spray.size / 2) {
            // Remove the bug from the array
            bugs.splice(i, 1);
            killedBugs++; // Increment the killed bugs count
        }
    }
}