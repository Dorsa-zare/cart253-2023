/**
 * Garden Simulation
 * Dorsa Zare
 * 
 * This is a game where the bats are trying to damage the flowers,
 *  and the player has to protect the flowers by clicking on them.
 */

"use strict";


// Our garden
let garden = {
    // An array to store the individual flowers
    flowers: [],
    // How many flowers in the garden
    numFlowers: 25,
     // An array of bats
     bats: [],
    // How many bats in the garden
    numBats: 7,
    // The color of the grass (background)
    grassColor: {
      r: 120,
      g: 180,
      b: 120
    }
  };

  // Variable for water
  let water; 
 // Initialize the game state
  let gameState = "title";

/**
 * Description of preload
*/
function preload() {

}


/**
 * // setup() creates the canvas and the flowers in the garden
*/
function setup() {
    createCanvas(600, 600);

    // Create our flowers by counting up to the number of the flowers
    for (let i = 0; i < garden.numFlowers; i++) {
        let x = random(0,width);
        let y = random(0,height);
        let size = random(50,80);
        let stemLength = random(50,100);
        let petalColor = {
            r: random(100,255),
            g: random(100,255),
            b: random(100,255)
        };
      // Create a new flower
      let flower = new Flower(x, y , size, stemLength, petalColor);
      // Add the flower to the array of flowers
      garden.flowers.push(flower);
    }

    //Create the bats
    for (let i = 0; i < garden.numBats; i++) {
        let bat = new Bat(random(0,width),random(0,height));
        garden.bats.push(bat);  
    }

       // Create the water object
       water = new Water();
  }
  
   
/**
 * // Displays our flowers
*/
function draw() {
// Display the grass
background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);


  if (gameState === "title") {
    title();
  } else if (gameState === "playing") {
    playing();
    checkWinOrGameOver();
  } else if (gameState === "win") {
    win();
  } else if (gameState === "gameover") {
    gameover();
  }

}

function title() {
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);
  //Display the title page texts
  displayTitletext(); 
  // Check if mouse is pressed move to playing state
  if (mouseIsPressed) { 
      gameState = "playing";
  }
}

 // The title page text
function displayTitletext() {
  textSize(30); 
  fill(0);
  text(`Click on each flower with your mouse 
              to make them grow`, width / 2 - 250 , height / 2 - 50 );
  fill(255);
  text("Press mouse to start", width / 2 - 130, height / 2 + 80);
}



function playing() {

  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

// Loop through all the flowers in the array and display them
for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    if (flower.alive) {
        flower.shrink();
        flower.display();     
    }
  }

  //Counts all the bats
  for (let i = 0; i < garden.bats.length; i++) {
    let bat = garden.bats[i];
    if (bat.alive) {
        bat.shrink();
        bat.move();
        bat.display();

        // Looks at all the flowers in the garden and tries to eat flower 
        for (let j = 0; j < garden.flowers.length; j++) {
            let flower = garden.flowers[j];
            bat.tryToEatFlower(flower);
        }
    }
  }

  // Display and move the water object
  water.move();
  water.display();
}


function checkWinOrGameOver() {
    // Count the number of alive flowers and dead bats
    let numAliveFlowers = 0;
    let numDeadBats = 0;
    for (let i = 0; i < garden.flowers.length; i++) {
      if (garden.flowers[i].alive) {
        numAliveFlowers++;
      }
    }
    for (let i = 0; i < garden.bats.length; i++) {
      if (!garden.bats[i].alive) {
        numDeadBats++;
      }
    }
  
    // Check if all bats are dead and more than 10 flowers are alive
    if (numDeadBats === garden.bats.length && numAliveFlowers > 10) {
      gameState = "win"; // Transition to the win state
    }
  
    // Check if there are less than 10 flowers left
    if (numAliveFlowers < 10) {
      gameState = "gameover"; // Transition to the game over state
    }
  }

//State for when the user has won
function win() { 
  textSize(32);
  fill(255);
  text("Congratulations! You won!", width / 2 - 180, height / 2);
}

 //State for when the user has lost
function gameover() {
  textSize(40);
  fill(255, 0, 0);
  text("Game over!", width / 2 - 120, height / 2);
}


function mousePressed() {
  for (let i = 0; i < garden.flowers.length; i++) {
      garden.flowers[i].mousePressed();
  }
}
